import { Default } from '@/declarations';
import { Actor, ActorSubclass, Agent, HttpAgent } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';
import fetch from 'cross-fetch';

/**
 * Adapter responsible for creating actors.
 * It can receive a provider to identify the actor like a wallet provider (e.g. Plug).
 */
export class ActorAdapter {
  static readonly actors: ActorAdapter.Actors = {};

  constructor(
    private provider?: ActorAdapter.Provider,
    private options: ActorAdapter.Options = {
      host: Default.IC_HOST,
      whitelist: [Default.SWAP_CANISTER_ID],
    }
  ) {}

  /**
   * Creates a new actor or use from memory if is already created.
   * @param {string} canisterId The canister id of the actor
   * @param {IDL.InterfaceFactory} interfaceFactory The interface factory of the actor
   * @returns {Promise<ActorAdapter.Actor<T>>} The actor
   */
  async createActor<T>(
    canisterId: string,
    interfaceFactory: IDL.InterfaceFactory
  ): Promise<ActorAdapter.Actor<T>> {
    if (ActorAdapter.actors[canisterId]) {
      if (this.provider) {
        const currentPrincipal = await Actor.agentOf(
          ActorAdapter.actors[canisterId].actor
        )?.getPrincipal();
        const providerPrincipal = await this.provider?.agent?.getPrincipal();

        if (currentPrincipal?.toString() === providerPrincipal?.toString()) {
          return ActorAdapter.actors[canisterId].actor;
        }
      } else {
        return ActorAdapter.actors[canisterId].actor;
      }
    }

    let actor: ActorSubclass<T>;

    if (!this.provider) {
      actor = ActorAdapter.createAnonymousActor(
        canisterId,
        interfaceFactory,
        this.options.host
      );
    } else {
      await this.createAgent([canisterId]);
      actor = await this.provider.createActor<T>({
        canisterId,
        interfaceFactory,
      });
    }

    ActorAdapter.actors[canisterId] = { actor, adapter: this };
    return actor;
  }

  /**
   * Creates the agent from provider.
   * @param {string[]} extraWhitelist Extra whitelist to add to the default whitelist
   * @returns {Promise<void>}
   */
  private async createAgent(extraWhitelist: string[] = []): Promise<void> {
    if (this.provider) {
      const whitelistSet = new Set([
        ...this.options.whitelist,
        ...extraWhitelist,
        ...Object.keys(ActorAdapter.actors),
      ]);
      await this.provider.createAgent({
        whitelist: Array.from(whitelistSet),
        host: this.options.host,
      });
    }
  }

  /**
   * Gets the adapter from an actor.
   * @param {Actor} actor The actor
   * @returns {ActorAdapter | undefined} The adapter or undefined if is not existent
   */
  static adapterOf(actor: Actor): ActorAdapter | undefined {
    const canisterId = Actor.canisterIdOf(actor).toString();
    if (ActorAdapter.actors[canisterId]) {
      return ActorAdapter.actors[canisterId].adapter;
    }
  }

  /**
   * Create an anonymous actor.
   * @param {string} canisterId The canister id of the actor
   * @param {IDL.InterfaceFactory} interfaceFactory The interface factory of the actor
   * @param {string=Default.IC_HOST} host The IC host to connect to
   * @returns {ActorAdapter.Actor<T>} The anonymous actor
   */
  static createAnonymousActor<T>(
    canisterId: string,
    interfaceFactory: IDL.InterfaceFactory,
    host = Default.IC_HOST
  ): ActorAdapter.Actor<T> {
    const agent = new HttpAgent({ host, fetch });

    return Actor.createActor<T>(interfaceFactory, {
      agent,
      canisterId,
    });
  }
}

/**
 * Type definition for the ActorAdapter.
 */
export namespace ActorAdapter {
  /**
   * Agent provider interface.
   */
  export type Provider = {
    agent: Agent | null;
    createActor<T>(params: CreateActorParams<T>): Promise<ActorSubclass<T>>;
    createAgent(params: CreateAgentParams): Promise<Agent>;
  };

  /**
   * Options for the ActorAdapter.
   */
  export type Options = {
    whitelist: string[];
    host: string;
  };

  /**
   * Parameters for creating an actor using the provider.
   */
  export interface CreateActorParams<T> {
    agent?: HttpAgent;
    actor?: ActorSubclass<ActorSubclass<T>>;
    canisterId: string;
    interfaceFactory: IDL.InterfaceFactory;
  }

  /**
   * Parameters for creating an agent using the provider.
   */
  export interface CreateAgentParams {
    whitelist?: string[];
    host?: string;
  }

  /**
   * Parameters for creating an actor using the ActorAdapter.
   */
  export type ActorParams = {
    canisterId?: string;
    interfaceFactory: IDL.InterfaceFactory;
  };

  /**
   * Interface for static stored actors.
   */
  export type Actors = Record<
    string,
    { actor: ActorSubclass<any>; adapter: ActorAdapter }
  >;

  /**
   * Return for the createActor function of the ActorAdapter.
   */
  export type Actor<T> = ActorSubclass<T>;
}

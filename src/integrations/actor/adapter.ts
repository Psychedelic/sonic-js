import { Default } from '@/declarations';
import { Actor, ActorSubclass, Agent, HttpAgent } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';
import fetch from 'cross-fetch';

/**
 * Adapter responsible for creating actors.
 * It can receive a provider to identify the actor like a wallet provider (e.g. Plug).
 */
export class ActorAdapter implements ActorAdapter.Repository {
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
   */
  private async createAgent(extraWhitelist: string[] = []): Promise<void> {
    if (this.provider) {
      await this.provider.createAgent({
        whitelist: [...this.options.whitelist, ...extraWhitelist],
        host: this.options.host,
      });
    }
  }

  /**
   * Gets the adapter from an actor
   */
  static adapterOf(actor: Actor): ActorAdapter | undefined {
    const canisterId = Actor.canisterIdOf(actor).toString();
    if (ActorAdapter.actors[canisterId]) {
      return ActorAdapter.actors[canisterId].adapter;
    }
  }

  /**
   * Create an anonymous actor
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

export namespace ActorAdapter {
  export type Provider = {
    agent: Agent | null;
    createActor<T>(params: CreateActor<T>): Promise<ActorSubclass<T>>;
    createAgent(params: CreateAgentParams): Promise<Agent>;
  };

  export type Options = {
    whitelist: string[];
    host: string;
  };

  export interface Repository {
    createActor: <T>(
      canisterId: string,
      interfaceFactory: IDL.InterfaceFactory
    ) => Promise<T>;
  }

  export interface CreateActor<T> {
    agent?: HttpAgent;
    actor?: ActorSubclass<ActorSubclass<T>>;
    canisterId: string;
    interfaceFactory: IDL.InterfaceFactory;
  }

  export interface CreateAgentParams {
    whitelist?: string[];
    host?: string;
  }

  export type ActorProps = {
    canisterId?: string;
    interfaceFactory: IDL.InterfaceFactory;
  };

  export type Actors = Record<
    string,
    { actor: ActorSubclass<any>; adapter: ActorAdapter }
  >;

  export type Actor<T> = ActorSubclass<T>;
}

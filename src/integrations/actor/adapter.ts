import { Default } from '@/declarations';
import { Actor, ActorSubclass, Agent, HttpAgent } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';
import fetch from 'cross-fetch';

/**
 * Adapter responsible for creating actors.
 * It can receive a provider to identify the actor like a wallet provider (e.g. Plug).
 */
export class ActorAdapter implements ActorAdapter.Repository {
  static readonly actors: Record<string, ActorSubclass<any>> = {};

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
  ): Promise<ActorSubclass<T>> {
    if (ActorAdapter.actors[canisterId]) {
      if (this.provider) {
        const currentPrincipal = await Actor.agentOf(
          ActorAdapter.actors[canisterId]
        )?.getPrincipal();
        const providerPrincipal = await this.provider?.agent?.getPrincipal();

        if (currentPrincipal?.toString() === providerPrincipal?.toString()) {
          return ActorAdapter.actors[canisterId];
        }
      } else {
        return ActorAdapter.actors[canisterId];
      }
    }

    let actor: ActorSubclass<T>;

    if (!this.provider) {
      const agent = new HttpAgent({ host: this.options.host, fetch });

      actor = Actor.createActor<T>(interfaceFactory, {
        agent,
        canisterId,
      });
    } else {
      await this.createAgent();
      actor = await this.provider.createActor<T>({
        canisterId,
        interfaceFactory,
      });
    }

    ActorAdapter.actors[canisterId] = actor;
    return actor;
  }

  /**
   * Creates the agent from provider.
   */
  private async createAgent(): Promise<void> {
    if (this.provider && !this.provider.agent) {
      await this.provider.createAgent({
        whitelist: this.options.whitelist,
        host: this.options.host,
      });
    }
  }
}

export namespace ActorAdapter {
  export type Provider = {
    agent: Agent | null;
    createActor<T>(params: CreateActor<T>): Promise<ActorSubclass<T>>;
    createAgent(params: CreateAgentParams): Promise<Agent>;
  };

  export type Options = {
    whitelist?: string[];
    host?: string;
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
}

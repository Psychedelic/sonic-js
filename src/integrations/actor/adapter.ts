import { Default } from '@/declarations';
import { Actor, ActorSubclass, Agent, HttpAgent } from '@dfinity/agent';
import { IDL } from '@dfinity/candid';

export class ActorAdapter implements ActorAdapter.Repository {
  constructor(
    private provider?: ActorAdapter.Provider,
    private options: ActorAdapter.Options = {
      host: Default.IC_HOST,
      whitelist: [Default.SWAP_CANISTER_ID],
    }
  ) {}

  async createActor<T>(
    canisterId: string,
    interfaceFactory: IDL.InterfaceFactory
  ): Promise<ActorSubclass<T>> {
    if (ActorAdapter.Actors[canisterId]) {
      return ActorAdapter.Actors[canisterId];
    }

    let actor;

    if (!this.provider) {
      const agent = new HttpAgent({ host: this.options.host });

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

    ActorAdapter.Actors[canisterId] = actor;
    return actor;
  }

  private async createAgent(): Promise<void> {
    if (this.provider && !this.provider?.agent) {
      await this.provider.createAgent({
        whitelist: this.options?.whitelist,
        host: this.options.host,
      });
    }
  }
}

export namespace ActorAdapter {
  export const Actors: Record<string, ActorSubclass<any>> = {};

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

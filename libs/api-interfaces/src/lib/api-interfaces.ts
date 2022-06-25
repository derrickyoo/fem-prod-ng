export interface IMessage {
  message: string;
}

export interface IBaseEntity {
  id: string | null;
}

export interface IWidget extends IBaseEntity {
  title: string;
  description: string;
}

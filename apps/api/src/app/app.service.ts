import { Injectable } from '@nestjs/common';
import { IMessage } from '@fem-prod-ng/api-interfaces';

@Injectable()
export class AppService {
  getData(): IMessage {
    return { message: 'Welcome to api!' };
  }
}

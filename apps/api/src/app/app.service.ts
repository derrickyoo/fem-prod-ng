import { Injectable } from '@nestjs/common';
import { Message } from '@fem-prod-ng/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}

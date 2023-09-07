import { Args, Query, Resolver } from '@nestjs/graphql';

import { AppService } from './app.service';

@Resolver()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  getHello(@Args('id') id: string): string {
    return this.appService.getHello();
  }
}

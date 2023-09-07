import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { databaseConfig, graphqlConfig } from 'src/config';

@Module({
  imports: [
    GraphQLModule.forRoot(graphqlConfig),
    MongooseModule.forRoot(databaseConfig),
  ],
})
export class CoreModule {}

import { MongooseModule, MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from '../common/common.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';

export const databaseConfigAsync: MongooseModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    uri: configService.get<string>('MONGODB_URI'),
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }),
  inject: [ConfigService],
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CommonModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/api/schema.gql'),
      playground: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    MongooseModule.forRootAsync(databaseConfigAsync),
    AuthModule,
    UserModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

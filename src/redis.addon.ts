import { DynamicModule, Module } from '@nestjs/common';
import { RedisOptions } from 'ioredis';

import { REDIS_MODULE_OPTIONS } from './redis.constants';
import { RedisClientProvider } from './redis.provider';
import { RedisService } from './redis.service';

@Module({})
export class RedisAddon {
    static forRoot(options: RedisOptions): DynamicModule {
        return {
            module: RedisAddon,
            providers: [
                { provide: REDIS_MODULE_OPTIONS, useValue: options },
                RedisClientProvider,
                RedisService
            ],
            exports: [RedisService]
        };
    }
}
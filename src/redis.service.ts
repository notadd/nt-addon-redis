import { Inject, Injectable } from '@nestjs/common';
import { KeyType, Redis } from 'ioredis';

import { REDIS_PROVIDER_TOKEN } from './redis.constants';

@Injectable()
export class RedisService {
    constructor(
        @Inject(REDIS_PROVIDER_TOKEN) private readonly redisClient: Redis
    ) { }

    async hget(key: KeyType, field: string): Promise<string> {
        return this.redisClient.hget(key, field);
    }

    async hset(key: KeyType, field: string, value: any): Promise<0 | 1> {
        return this.redisClient.hset(key, field, value);
    }
}
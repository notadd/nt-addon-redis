import { KeyType, Redis } from 'ioredis';
export declare class RedisService {
    private readonly redisClient;
    constructor(redisClient: Redis);
    hget(key: KeyType, field: string): Promise<string>;
    hset(key: KeyType, field: string, value: any): Promise<0 | 1>;
}
//# sourceMappingURL=redis.service.d.ts.map
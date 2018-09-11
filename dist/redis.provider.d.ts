import * as ioredis from 'ioredis';
export declare const RedisClientProvider: {
    provide: string;
    useFactory: (options: ioredis.RedisOptions) => ioredis.Redis;
    inject: string[];
};
//# sourceMappingURL=redis.provider.d.ts.map
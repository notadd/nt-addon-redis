import * as ioredis from 'ioredis';

import { REDIS_MODULE_OPTIONS, REDIS_PROVIDER_TOKEN } from './redis.constants';

export const RedisClientProvider = {
    provide: REDIS_PROVIDER_TOKEN,
    useFactory: (options: ioredis.RedisOptions) => {
        return new ioredis(options);
    },
    inject: [REDIS_MODULE_OPTIONS]
};
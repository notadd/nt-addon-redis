"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis = require("ioredis");
const redis_constants_1 = require("./redis.constants");
exports.RedisClientProvider = {
    provide: redis_constants_1.REDIS_PROVIDER_TOKEN,
    useFactory: (options) => {
        return new ioredis(options);
    },
    inject: [redis_constants_1.REDIS_MODULE_OPTIONS]
};

//# sourceMappingURL=redis.provider.js.map

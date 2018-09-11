"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var RedisAddon_1;
const common_1 = require("@nestjs/common");
const redis_constants_1 = require("./redis.constants");
const redis_provider_1 = require("./redis.provider");
const redis_service_1 = require("./redis.service");
let RedisAddon = RedisAddon_1 = class RedisAddon {
    static forRoot(options) {
        return {
            module: RedisAddon_1,
            providers: [
                { provide: redis_constants_1.REDIS_MODULE_OPTIONS, useValue: options },
                redis_provider_1.RedisClientProvider,
                redis_service_1.RedisService
            ],
            exports: [redis_service_1.RedisService]
        };
    }
};
RedisAddon = RedisAddon_1 = __decorate([
    common_1.Module({})
], RedisAddon);
exports.RedisAddon = RedisAddon;

//# sourceMappingURL=redis.addon.js.map

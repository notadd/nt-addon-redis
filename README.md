# ns-addon-redis

Redis addon for Notadd.

## Installation

```bash
# install
$ npm install @notadd/addon-redis

or

$ yarn add @notadd/addon-redis
```

## Usage

> app.module.ts

```typescript
import { Module } from '@nestjs/common';
import { RedisAddon } from '@notadd/addon-redis'

@Module({
    import: [
        RedisAddon.forRoot({
            // redis connection options, such as host, port, etc
        })
    ]
})
export AppModule { }
```

> xxx.service.ts

```typescript
import { Injectable } from '@nestjs/common';
import { RedisService } from '@notadd/addon-redis';

@Injectable()
export class TestService {
    constructor(
        @Inject(RedisService) private readonly redisService: RedisService
    ) { }

    // service method usage
    async test() {
        // redis hset
        await this.redisService.hset(key, field, value);
        // redis hget
        await this.redisService.hget(key, field);
    }
}
```
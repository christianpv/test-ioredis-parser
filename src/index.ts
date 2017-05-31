import Redis from 'ioredis';
const redisClient = new Redis({ parser: 'hiredis' });
redisClient.set('foo', 'bar');

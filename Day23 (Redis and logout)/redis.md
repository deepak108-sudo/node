### Redis
Redis is an in-memory data store used mainly as a **cache, fast database, or message broker**

In-memory: data stored in computer's RAM not on hard disk.

**Why redis is fast??**
* Data kept in RAM
* Operations are O(1) or very close
response time : microseconds.

In memory all data **store in ram.** for fast query.

* We do not store data permanantly.
* Redis store data in secondary memory as backup.

* It solve the problem of cache.

* Redis ko alag sever pe rakhna sahi hai. 
    We can store in server ram also but scalabity affect.

#### Use cases
If user are refreshing the pages again and again to better user experience and db call we can store data in redis.

* Frequently used data are stored as cache in redis.

Then can we store the mongodb data to redis because it is fast.
No, because it costly.

* We use less.
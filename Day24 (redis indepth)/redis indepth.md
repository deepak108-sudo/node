## Redis

While logout i have got token we can expire the token but by copying anyone can use it.

But we can't expire simply to handle this we store in redis. now on we check first redis whether token is present on  redis or not.

* First of all we connect to database and redis then sever.

We can use Promise.all to and give function to connect redis and database.

-> redis expect data in key- value pair because for fast retrival.
.....................................................

**Diff between expire and expireAt**
expire: From current time to time mentions
expireAt: From that token initial time to token expiry time we have decoded by token

#### one more problem
user can send token which are not created by me before inserting in redis we use middleware.

-> Now we have inserted in block list in redis.

### Check whether it exist on redis or not 
We check in middleware whether it is blocked or not.


## Rate Limiter
Any user request again and again using automation by js code for loop.


### Imp
* Create hash of token so that if stolen do not effect
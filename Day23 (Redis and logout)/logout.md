### Logout

In Logout we send invalid token so that it can't request more.

```
        res.cookie("token",null,{expires: new Date(Date.now())});
```
By this line of code we can delete the cookie. Here null mean by deleting we are not sending any string which replace the present cookie.

* By this line server tells to client set expiry date of token of now. then client automatically delete this because it is already expired.

### Alert
Any chor can copy our token and use it until it got expired.

* Logging out **only deletes the cookie, it does not invalidate** the token itself.

* So if you manually copy an old token and send it again. server still accepts it until it expires.

### JWT
A JWT is just a ***signed string***
* Server does not store it anywhere. Server only checks. Is signature valid? Is it expired.
* If both are -> request allowed.

What is the solution??
* **Store the blocked token into db**. and check each time when user request that this token is already blocked by me or not.

**here is also problem**
db call which reduces the performance and bill.

-> There can be one more thing we can store all the token in ram where server lives because token dosen't leave too late. So storage is not the problem

-> We need to implement the data structure to access and erase it efficiently.

Here is the problem in this also. 
For replicas we need to send the info of ram of one server to other server.

-> for that we need new mechanism because it is stored in ram.

***What is the solution then***
Redis is the solution 
Aa gya hero !!!

It is very fast. than mongodb 
mongo db take 200-300 ms 
redis 200-300 micro second

* Redis also create replicas and sharding as mongodb.
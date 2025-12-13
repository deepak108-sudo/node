Express node js kaa framework which simplifies building web applications and APIs by handling routing,middleware, and HTTP request and response/

### Need of Express
 ###### Using node code look like this

 ```
    const http=require('http');

    http.createServer((req,res)=>{
        if(req.url==="/users" && req.method==="GET"){
            res.end("User LIst")'
        }
    }).listen(3000);
```
Manage krna hard, No routing system, no middleware, not scalable
###### Mentos Zindagi
With Express
```
    const app=require('express');

    app.get("/users",(req,res)=>{
        res.end("USers List");
    })

    app.listen(3000);
```
**It is clean easy routing,Scalable.**


? : char become optional.
    abot, about

+ : char can be repeated
    abouuuuuuut, about

* : any number character can be written.
    aboudjfkjdkfjdkt,about
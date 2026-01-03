## JSON
JSON(Javascript Object Notation) is text based data exchange format.

We convert it into because it is light weight and used by all language particularly in backend. 

https://www.freecodecamp.org/news/what-is-json-a-json-file-example/

### JSON Vs JS Object
1. Text based format (String)      Object
2. String,number,null,object        All, function also.
    array.

JSON.stringify({name:"Deepak", age:30}) converts to "{"name":"Deepak","age":30}"
Now this can be easily travel in physical layer in 0101 format.

* After reaching to destination it should convert again in object done by parser.
    Parser: express.json()
    {name:"Deepak". age:'30'} number also converted to string. due to confusion because they did not know so for safety.(mostly).

    We can also write the code of express.json() to convert json -> js object.

* Because in js object many thing are present like properties.
Json and js object as similar as java and javascript.

```
app.use(express.json());    //parses incoming JSON request bodies and converts them into JavaScript objects stored in req.body
```

### Headers
    Headers are metadata sent along an http request and response.
    like: format json,html,xml


app.use() if prefix substring match and think that if part of substring matches then enter. 
-> It can get all request get,post,delete.
app.get(), post() should match all string.

fetch by default send get method.
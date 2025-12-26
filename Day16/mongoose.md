User pagal hai kuch bhi bhej skta hai.

### Schema
Database ke andar kis kis field ko rakhna chahte hai usse schema khte hai.

We can create with help of mongodb. We use mongoose to write less code.

## Mongoose
It is an library of mongodb. 

Here user is collection name and userSchema is Kiss trah dikehga.
const User=mongoose.model("user",userSchema) 

-> User is like class having name,age etc

#### Good habit 
First connect to database then listen.

* Because let suppose that database connection gives some error.
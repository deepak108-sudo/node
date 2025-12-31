User or hacker want to crash your server and fill database.

**We can use validate in place of enum to add if value are in array or not if not then throw email.**

## Update bug
When we have validation of enum or validate then it will check during user register.

***What happen when call update***

It will update gender with diff that i have validated boom

Here in options in UpdateAndDelete
1. before -> give me data before update.
    after-> after update.

2. **Same way runValidators** 

***We have to explicitly tell that run validate function*** that i have written on mongoose schema before update.

```
    await User.findByIdAndUpdate(id,{to_be_update},{"runValidators":true});
```

### TimeStamp
It automatically stores timeStamp when user register.
It is used to find data in last 30days or 1 year how many users have registered.

### Immutable
If we want that after register user can't update email id they can other thing but not email then we add immutable:true in that field

***until now we have done with schema level validation***

Now jump to api level validation.
Why required??
**Because of db call, When you do schema level then it will call read, write**

* Bill bharna padta hai each read write kaa.

* Performance issue time jyada lgega, db me call jaa rha, find misssing. 200-300 ms
(User experience) aacha hoga.

That's why API level validation.
* Use .every as we used in index.js


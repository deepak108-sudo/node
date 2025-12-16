**Middleware** 
It is a function that runs b/w client req. and server res. to process,modify or control request.

* Iske through km code likh skta hun jaise abhi admin ko authorize k liye mujhe hrr http method me wahi code likhna pd rha **repetative** using middleware usko ek jagah likh ke run kr skta hun

- app.use() handle all http method .get,post,delete,patch

Authentication: Process of verifying the identity of a user or system to confirm that they are who they claim to be. **who are you**

Authorization: What the power to do.
 - What actions or resources an authenticated user is allowed to access. **what are you allowed to do**

 We have fixed a universal no. status code. 
 Because for diff user:
 It can be "Authentication need" , "Authentication needed", "Authentication required" **Ambiguity**

 | Code    | Meaning               | When to Use                          |
| ------- | --------------------- | ------------------------------------ |
| **200** | OK                    | Request successful                   |
| **201** | Created               | Resource created successfully        |
| **400** | Bad Request           | Invalid input / wrong data           |
| **401** | Unauthorized          | User not authenticated               |
| **403** | Forbidden             | No permission (authorization failed) |
| **404** | Not Found             | Resource doesn’t exist               |
| **409** | Conflict              | Duplicate data                       |
| **500** | Internal Server Error | Server error                         |




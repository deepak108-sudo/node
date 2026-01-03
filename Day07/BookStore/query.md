### How can we send data from client to server

1. Query Parameter: Always in string format. Exposed anyone can see.
    http://localhost:3000/book/filter?author=Joe

2. Dynamic Parameter: Always in string format. Anyone can see through link.
    http://localhost:3000/book/2

3. Body: to send sensitive data. because it does not goes through link.(Modern parser convert into number).
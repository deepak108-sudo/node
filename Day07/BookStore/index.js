import express from 'express'

const app=express();

app.use(express.json());    //parses incoming JSON request bodies and converts them into JavaScript objects stored in req.body

const books=[
    {id:1,name:"Rich Dad Poor Dad",author:"Joe",price:200},
    {id:2,name:"The Diary of CEO",author:"Steven",price:500},
    {id:3,name:"Mindset",author:"Biden",price:600},
    {id:5,name:"Way of thinking big",author:"Joe",price:350},
    {id:6,name:"In search of meaning",author:"Julius",price:600},
    {id:7,name:"Deep Work",author:"Renusa",price:150},
]


app.get('/book',(req,res)=>{
    res.send(books);
    console.log("Sent Successfully");
})

//Static field above dynamic field
app.get("/book/filter",(req,res)=>{
    console.log(req.query);
    //res.send("filtration");

    let book=books.filter(book=>book.author===req.query.author);
    res.send(book);
})

app.get('/book/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let info=books.find(info=> info.id===id);
    res.send(info);
});

app.post('/book/add',(req,res)=>{
    console.log(req.body);  //use of express.json()
    books.push(req.body);
    res.send(`Data saved successfully ${req.body}`);
})

app.patch('/book/update/:price/:id',(req,res)=>{
    let id=parseInt(req.params.id);
    let price=parseInt(req.params.price);

    books.find(info=>{
        if(info.id===id){
            info.price=price;
        }
    });

    res.send("Price updated with"+price);
    console.log("price"+price);
})

app.delete('/book/:id',(req,res)=>{
    const id=parseInt(req.params.id);

    let Idx=books.findIndex(info=>{
        return (info.id===id);
    });

    books.splice(Idx,1);
    res.send("Deleted Successfully");
})

 

app.listen(3000,()=>{
    console.log("Server started 3000");
})
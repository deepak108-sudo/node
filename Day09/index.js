import express from 'express'
const app=express();

app.use(express.json()); //parse json to js object

const FoodItem=[
    {id:1,food:"Chowmin",category:"veg",price:100},
    {id:2,food:"Burger",category:"veg",price:150},
    {id:3,food:"Chicken",category:"non-veg",price:300},
    {id:4,food:"Susi",category:"veg",price:200},
    {id:5,food:"Vergin Moito",category:"veg",price:239},
    {id:6,food:"Biryani",category:"non-veg",price:100},
    {id:7,food:"Chawal",category:"veg",price:50},
    {id:8,food:"Butter Naan",category:"veg",price:40},
    {id:9,food:"Waad",category:"veg",price:500},
    {id:10,food:"Egg rice",category:"non-veg",price:100},
    {id:11,food:"Egg Chomin",category:"non-veg",price:70},
]

const FoodMenu=[];

//Authentication krna hoga ki admin hi hai
//dummy code 
//Add food Item

app.use("/admin",(req,res,next)=>{
    const token="ABCDEF"
    const Access= token==="ABCDEF" ? 1 : 0;

    if(!Access){
        res.status(403).send("You are not authorized Person to change");
    }

    next();
})

app.post("/admin",(req,res)=>{

        const food=req.body;
    
        FoodItem.push(food);
        res.status(201).send("Food added on menu Successfully");
    
})

app.delete("/admin/:id",(req,res)=>{
        const id=parseInt(req.params.id);

        const index=FoodItem.findIndex(item=>item.id===id);

        if(index===-1){
            res.status(404).send("Item not found");
        }
        else{
            FoodItem.splice(index,1);
            res.status(200).send("Item deleted successfully");
        }
})

app.get("/food",(req,res)=>{
    res.status(200).send(FoodItem);
})



//To update partially
app.patch("/admin",(req,res)=>{
        const id=req.body.id;
        const food=req.body.food;
        const price=req.body.price;

        const idx=FoodItem.findIndex(item=> item.id===id);
        if(idx===-1){
            res.status(404).send("Food not found");
        }
        else{
            console.log("Food index:"+idx);
            FoodItem[idx].food=food;
            FoodItem[idx].price=price;

            res.status(200).send("Updated price and food");
        }
})


app.listen(3000,()=>{
    console.log("Server is running at 3000");
});
const express = require('express');
const app = express();

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
app.use(express.json());


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/test',async(req,res)=>{
    try{
        res.status(200).json({message:"API is working"});
    }catch(error){
        console.error("An error occured",error);
    }
});

app.post('/offers', async (req, res) => {
    try {
        // Validate and sanitize input data if needed

        const offer = await prisma.listing.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                email: req.body.email,
                cutoff: req.body.cutoff
            }
        });

        // Return the created offer in the response
        res.status(201).json(offer);
    } catch (error) {
        console.error('Error creating offer:', error);
        res.status(500).json({ message: 'Could not create offer' });
    }
});

app.get('/offers',async(req,res)=>{
    try{
        const offers = await prisma.listing.findMany();
        res.status(200).json(offers);
    }catch(error){
        console.error("Error getting offers from database",error);
        res.status(500).json({message:"could not get offers from database"})
    }
});

app.get('/offers/:id',async(req,res)=>{
    try{
        const offer = await prisma.listing.findUnique({
            where:{
                id:Number(req.params.id)
            }
        });
        res.status(200).json(offer);
    }catch(error){
        console.error("Error getting offer",error);
        res.status(500).json({message:"could not get offer"});
    }
});

app.delete('/offers/:id',async(req,res)=>{
    try{
        const offer = await prisma.listing.delete({
            where:{
                id:Number(req.params.id)

            }
        });
        res.status(200).json(offer);
    }catch(error){
        console.error("Error deleting offer",offer);
        res.status(500).json({message:"could not delete offer"});
    }
});

app.post('/faqs',async(req,res)=>{
    try{
       const faq = await prisma.listing.create({
        data:{
            title:req.body.title,
            description:req.body.description,
            authorname:req.body.authorname
        }
       });
       res.status(200).json(faq);
    }catch(error){
        console.error("Error creating FAQ",error);
        res.status(500).json({message:"could not create FAQ"});
    }
});

app.get('/faqs',async(req,res)=>{
    try{
      const faqs = await prisma.listing.findMany();
      res.status(200).json(faqs);  
    }catch(error){
        console.error("Error getting FAQ",error);
        res.status(500).json({message:"could not get FAQ"});
    }
});

app.get('/faqs/:id',async(req,res)=>{
    try{
        const faq = await prisma.listing.findUnique({
            where:{
                id:Number(req.params.id),
            }
        });
        res.status(200).json(faq);
    }catch(error){
        console.error("Error getting FAQ",error);
        res.status(500).json({message:"could not get FAQ"});
    }
});

app.delete('/faqs:id',async(req,res)=>{
    try{
        const faq = await prisma.listing.delete({
            where:{
                id:Number(req.params.id)
            }
        });
        res.status(200).json(faq);
    }catch(error){
        console.error("Error deleting FAQ",error);
        res.status(500).json({message:"could not delete FAQ"});
    }
});


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const app = express();
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/test', async (req, res) => {
    try {
        res.status(200).json({ message: "API is working" });
    } catch (error) {
        console.error("An error occurred", error);
    }
});

app.post('/offers', async (req, res) => {
    try {
        const offer = await prisma.listing.create({
            data: {
                name: req.body.name,
                description: req.body.description,
                email: req.body.email,
                cutoff: req.body.cutoff
            }
        });

        res.status(201).json(offer);
    } catch (error) {
        console.error('Error creating offer:', error);
        res.status(500).json({ message: 'Could not create offer' });
    }
});

app.get('/offers', async (req, res) => {
    try {
        const offers = await prisma.listing.findMany();
        res.status(200).json(offers);
    } catch (error) {
        console.error("Error getting offers from database", error);
        res.status(500).json({ message: "Could not get offers from database" });
    }
});

app.get('/offers/:id', async (req, res) => {
    try {
        const offer = await prisma.listing.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(offer);
    } catch (error) {
        console.error("Error getting offer", error);
        res.status(500).json({ message: "Could not get offer" });
    }
});

app.delete('/offers/:id', async (req, res) => {
    try {
        const offer = await prisma.listing.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(offer);
    } catch (error) {
        console.error("Error deleting offer", error);
        res.status(500).json({ message: "Could not delete offer" });
    }
});

app.post('/faqs', async (req, res) => {
    try {
        const faq = await prisma.listing.create({
            data: {
                title: req.body.title,
                description: req.body.description,
                authorname: req.body.authorname
            }
        });
        res.status(200).json(faq);
    } catch (error) {
        console.error("Error creating FAQ", error);
        res.status(500).json({ message: "Could not create FAQ" });
    }
});

app.get('/faqs', async (req, res) => {
    try {
        const faqs = await prisma.listing.findMany();
        res.status(200).json(faqs);
    } catch (error) {
        console.error("Error getting FAQ", error);
        res.status(500).json({ message: "Could not get FAQ" });
    }
});

app.get('/faqs/:id', async (req, res) => {
    try {
        const faq = await prisma.listing.findUnique({
            where: {
                id: Number(req.params.id),
            }
        });
        res.status(200).json(faq);
    } catch (error) {
        console.error("Error getting FAQ", error);
        res.status(500).json({ message: "Could not get FAQ" });
    }
});

app.delete('/faqs/:id', async (req, res) => {
    try {
        const faq = await prisma.listing.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.status(200).json(faq);
    } catch (error) {
        console.error("Error deleting FAQ", error);
        res.status(500).json({ message: "Could not delete FAQ" });
    }
});

app.post('/applications', async (req, res) => {
    try {
    
        const { name, gpa, phonenumber, about } = req.body;
        const application = await prisma.application.create({
            data: {
                name,
                gpa,
                phonenumber,
                about
            }
        });

        res.status(200).json(application);
    } catch (error) {
        console.error("Error creating application:", error);
        res.status(500).json({ message: "Could not post application" });
    }
});




const PORT = process.env.PORT || 5011;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Endpoint to receive the quote submission
app.post('/api/quote', (req, res) => {
    const { serviceTier, addons, totalCost, contactEmail } = req.body;
    
    // In a real application, you might save this to a database, send an email, etc.
    console.log('Received Quote Submission:');
    console.log('Tier:', serviceTier);
    console.log('Add-ons:', addons);
    console.log('Total Cost:', totalCost);
    console.log('Email:', contactEmail);

    // Simulate some processing delay
    setTimeout(() => {
        res.status(200).json({
            success: true,
            message: 'Quote received successfully. We will be in touch shortly!',
            data: { serviceTier, addons, totalCost, contactEmail }
        });
    }, 1000);
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

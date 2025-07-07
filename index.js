const express = require('express');
const app = express();
const PORT = 8080;

// ✅ Middleware to parse JSON
app.use(express.json());

// 🔥 Start the server
app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);

// 🟢 GET request
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'M',
        message: 'Hello, this is a T-shirt endpoint!'
    });
});

// 🟡 POST request
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        return res.status(418).send({
            error: 'Logo is required'
        });
    }

    res.send({
        message: `T-shirt with ID ${id} has been updated with logo: ${logo}`,
        tshirt: '👕',
        size: 'M'
    });
});

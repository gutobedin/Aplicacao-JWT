const jwt = require("jsonwebtoken");
const cors = require('cors');
const express = require("express");

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    res.send('Rodando');
});

const port = 3000;

app.listen(port, () => {
    console.log('API rodando na porta ' + port);
    console.log(`http://localhost:${port}`);
});

app.post('/api/authenticate', (req, res) => {
    let response = req.body

    let object = {
        username: "bedin",
        password: "188502"
    }

    if (!response.username || !response.password) {
        return res.json({
            status: "Error",
        });
    }

    if (response.username == object.username && response.password == object.password) {
        const token = jwt.sign({ response }, 'secret', { expiresIn: '2h' })

        return res.json({
            status: "Success",
            token: token
        });
    }
    return res.json({
        status: "Error",
    });

});
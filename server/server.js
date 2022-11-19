const express = require('express');
const fs = require('fs');
const app = express();
const cart = require('./cartRouter');//обработчик всех запросов корзины
// const path = require('path')

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);

// app.get('/', (req, res) => {
//     res.sendFile('index.html')
//   })

// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

// app.get('/api/cart/:id', (req, res) => {
//    // res.send(req.params.id);
//     res.send(req.query);
// });

const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listen on port http://localhost:${port}...`));
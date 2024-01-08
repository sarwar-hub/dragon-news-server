const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const category = require('./data/categories.json');
const newses = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon news API server');
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if(id === 0) {
        res.send(newses);
    } else {
        const catWiseNews = newses.filter(news => parseInt(news.category_id) === id);
        res.send(catWiseNews);
    }
})

app.get('/news', (req, res) => {
    res.send(newses);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const singleNews = newses.find(news => news._id === id);
    console.log(singleNews)
    res.send(singleNews || 'nothing found');
})



app.listen(port, () => {
    console.log(`Dragon news running on port: ${port}`);
})
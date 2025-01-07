const express = require('express');
const articleRouter = require("./routes/articles");
const app = express();

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article',
        timeCreated: Date.now,
        description: 'Test Description'
    }]
    res.render("index", { articles : articles })
})

app.listen(5000, ()=>{
    console.log('Server is listening at port 5000....');
})
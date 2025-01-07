const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require("./routes/articles");
const app = express();

// mongoose.connect('mongodb://localhost/blog', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
// 
// mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs')
app.use('/articles', articleRouter)

app.get('/', (req, res)=>{
    const articles = [{
        title: 'Test Article1',
        timeCreated: new Date(),
        description: 'Test Description 1'
    },
    {
        title: 'Test Article2',
        timeCreated: new Date(),
        description: 'Test Description 2'
    }
]
    res.render("articles/index", { articles : articles })
})

app.listen(5000, ()=>{
    console.log('Server is listening at port 5000....');
})
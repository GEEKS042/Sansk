const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index.ejs');
});

/* app.get('/', (req, res) => {
    res.render('parallax.ejs');
}); */

app.get('/inner-page',(req, res)=> {
    res.render('inner-page.ejs');
});

app.get('/dayweek',(req, res)=> {
    res.render('dayweek.ejs');
});

app.get('/expert',(req, res)=> {
    res.render('expert.ejs');
});

app.get('/interme',(req, res)=> {
    res.render('interme.ejs');
});

app.get('/varn',(req, res)=> {
    res.render('varn.ejs');
});

app.get('/time',(req, res)=> {
    res.render('time.ejs');
});

app.get('/numberss',(req, res)=> {
    res.render('numberss.ejs');
});

app.get('/shabd',(req, res)=> {
    res.render('shabd.ejs');
});

app.get('/grammer',(req, res)=> {
    res.render('grammer.ejs');
});

app.get('/purush',(req, res)=> {
    res.render('purush.ejs');
});

app.get('/karak',(req, res)=> {
    res.render('karak.ejs');
});

app.get('/lakar',(req, res)=> {
    res.render('lakar.ejs');
});

app.get('/vyakran',(req, res)=> {
    res.render('vyakran.ejs');
});

app.get('/vachya',(req, res)=> {
    res.render('vachya.ejs');
});

app.get('/participle',(req, res)=> {
    res.render('participle.ejs');
});

app.get('/pvc',(req, res)=> {
    res.render('pvc.ejs');
});

app.listen(port, () => {
    console.log('listening to the port no at 8000');
})

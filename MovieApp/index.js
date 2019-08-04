let express = require('express');
let apiRoutes = require('./api-routes');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors');

let app = express();

app.use(bodyParser.urlencoded({
    extended : true
}));

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

if(!db)
    console.log('Error in connecting db');
else    
    console.log('Db connected successfully');

app.get('/',(req , res)=>{
    res.send(JSON.stringify({message:'Hello world from Express!'}))
});

app.use('/api',apiRoutes);

let port = process.env.port || 8000;
app.listen(port, () =>{
    console.log('Server started.....');
})
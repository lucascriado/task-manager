const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override')

const get = require('./routes/get');
const post = require('./routes/post');
const del = require('./routes/delete');
const put = require('./routes/put');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', get);
app.use('/', post);
// app.use('/', put);
app.use('/', del)

app.listen(9004);
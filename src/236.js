const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

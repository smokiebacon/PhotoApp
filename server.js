require('./db/db')

// requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const photosRouter = require('./routers/photos');

//middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));


//routers
app.use('/photos', photosRouter);



app.listen(3000, () => {
    console.log('Listening on port 3000');
})
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

//import route
const route = require('./routes/index.js');

//import Database
const db = require('./config/db/index');

//DB connect
db.Connect();

// static file => folder public
app.use(express.static(path.join(__dirname, 'public')));

// apply middleware (body parser)
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

//Template Engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// route init
route(app);

app.listen(port, () =>
    console.log(`App listening on port http://localhost:${port}`),
);

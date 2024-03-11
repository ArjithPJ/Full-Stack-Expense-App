const express= require('express');
const bodyparser= require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Expense =  require('./models/expenses');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const expenseRoutes =require('./routes/expense');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(expenseRoutes);
app.use(errorController.get404);

sequelize
.sync()
.then(result =>{
    app.listen(3000);
});
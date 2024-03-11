const Expense = require('../models/expenses');

exports.getHome = (req, res, next) => {
    Expense.findAll()
    .then(expenses => {
        console.log(expenses);
        res.render('home', {
            pageTitle: 'Home',
            path: 'home',
            exps: expenses
        });
    })
    
};

exports.postAddExpense = (req, res, next) => {
    const expense=req.body.expense;
    const description=req.body.description;
    const category=req.body.category;
    console.log(req.body.expense);
    console.log(req.body.description);
    console.log(req.body.category);
    console.log(req.body);
    Expense.create({
        amount: expense,
        description: description,
        category: category
    })
    .then(result => {
        console.log("Expense Added");
        res.redirect('/');
    })
    .catch(err =>{
        console.log(err);
    });
};

exports.postDeleteExpense = (req, res, next) => {
    const expenseId = req.body.expenseId;
    Expense.findByPk(expenseId)
    .then(expense => {
        expense.destroy();
    })
    .then(result =>{
        console.log('Expense Deleted');
        res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.getEditExpense = (req, res, next) => {
    const editId = req.params.expenseId;
    Expense.findByPk(editId)
    .then(expense => {
        return Expense.findAll()
        .then(expenses => {
            res.render('edit-expense', {
                exps: expenses,
                pageTitle: 'Edit Expense',
                path: '/edit-expense',
                edit_expense: expense
            });
        });
    })
    .catch(err => console.log(err));
};

exports.postEditExpense = (req,res,next) => {
    const updatedExpense = req.body.expense;
    const updatedDescription = req.body.description;
    const updatedCategory = req.body.category;
    Expense.findByPk(req.body.expenseId)
    .then(expense => {
        expense.amount=updatedExpense;
        expense.description=updatedDescription;
        expense.category=updatedCategory;
        expense.save();
    })
    .then(result => {
        console.log("Expense Updated");
        res.redirect('/');
    })
    .catch(err => console.log(err));
};


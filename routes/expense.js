const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.get('/',expenseController.getHome);

router.post('/add-expense', expenseController.postAddExpense);

router.post('/delete-expense', expenseController.postDeleteExpense);

router.get('/edit-expense/:expenseId', expenseController.getEditExpense);

router.post('/edit-expense/:expenseId', expenseController.postEditExpense);

module.exports = router;

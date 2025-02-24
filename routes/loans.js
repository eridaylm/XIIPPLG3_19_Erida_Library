const express = require('express');
const {getAllLoans, getLoanById, createLoan, updateLoan, deleteLoan} = require('../controllers/loans')
const router = express.Router();

router.get('/', getAllLoans);
router.get('/:id', getLoanById);
router.post('/', createLoan);
router.put('/:id', updateLoan);
router.delete('/:id', deleteLoan);

module.exports = router;
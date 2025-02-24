const Loan = require('../models/loans');

exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.findAll();
        res.json(loans);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


exports.getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (!loan) {
            return res.status(404).json({message: 'Loan not found'});
        }
        res.json(loan);
    }catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.createLoan = async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.status(201).json(loan);
    }catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.updateLoan = async (req,res) => {
    try {
        const [updated] = await Loan.update(req. body, {
            where: {id: req.params.id},
        });

        if (updated === 0) {
            return res.status(404).json({message: 'Loan not found'});
        }

        res.status(204).end();
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};
exports.deleteLoan = async (req,res) => {
    try {
        const deleted = await Loan.destroy ({
            where: {id: req.params.id},
        });

        if (deleted === 0) {
            return res.status(404).json({message: 'Loan not found'});
        }

        res.status(204).end();
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
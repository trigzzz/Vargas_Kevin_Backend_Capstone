const Plan = require('../models/plan');

exports.createPlan = async (req, res) => {
    try {
        const plan = new Plan(req.body);
        await plan.save();
        res.status(201).json(plan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllPlans = async (req, res) => {
    try {
        const plans = await Plan.find();
        res.status(200).json(plans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getPlanById = async (req, res) => {
    try {
        const plan = await Plan.findById(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updatePlan = async (req, res) => {
    try {
        const plan = await Plan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.status(200).json(plan);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deletePlan = async (req, res) => {
    try {
        const plan = await Plan.findByIdAndDelete(req.params.id);
        if (!plan) {
            return res.status(404).json({ message: 'Plan not found' });
        }
        res.status(200).json({ message: 'Plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

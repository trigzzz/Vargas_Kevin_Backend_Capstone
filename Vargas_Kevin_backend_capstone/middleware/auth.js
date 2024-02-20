const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ msg: 'Token is not valid' });
            } else {
                req.user = decoded.user; 
                next();
            }
        });
    } catch (err) {
        console.error('Something wrong with auth middleware');
        res.status(500).json({ msg: 'Server Error' });
    }
};

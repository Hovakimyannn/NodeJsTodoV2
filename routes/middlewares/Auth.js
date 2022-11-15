'use strict'

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, 'Hovakimyannn', (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}
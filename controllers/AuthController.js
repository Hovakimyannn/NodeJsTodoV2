'use strict'

const DatabaseManager = require('../database/DatabaseManager.js');
const User = require('../models/user.model.js');
const jwt = require("jsonwebtoken");
const dataBaseManager = new DatabaseManager(User);

class AuthController {
    async login(req, res) {
        let {email, password} = req.body;
        let existingUser;
        try {
            existingUser = await dataBaseManager.getByCredentials({email: email});
        } catch (e) {
            return res
                .status(409)
                .json({
                    success: false,
                    message: "Error! Something went wrong."
                })
        }

        if (!existingUser || existingUser.password !== password) {
            return res
                .status(409)
                .json({
                    success: false,
                    message: "Error! Something went wrong."
                })
        }

        let token;

        try {
            token = jwt.sign(
                {userId: existingUser.id, email: existingUser.email},
                "Hovakimyannn",
                {expiresIn: 1200}
            );
        } catch (e) {
            return res
                .status(409)
                .json({
                    success: false,
                    message: "Error! Something went wrong."
                })
        }

        return res
            .status(200)
            .json({
                success: true,
                data: {
                    userId: existingUser.id,
                    email: existingUser.email,
                    token: token,
                }
            })
    }

    async signup(req, res) {
        const data = req.body;
        let token;
        let newUser;
        try {
            newUser = await dataBaseManager.create(data)
            token = jwt.sign(
                {userId: newUser.id, email: newUser.email},
                "Hovakimyannn",
                {expiresIn: 1200}
            );
        } catch (e) {
            return res
                .status(409)
                .json({
                    success: false,
                    message: "Error! Something went wrong."
                })
        }

        return res
            .status(201)
            .json({
                success: true,
                data: {
                    userId: newUser.id,
                    email: newUser.email, token: token
                },
            });
    }

    async logout(req, res) {
        const authHeader = req.headers["authorization"];
        jwt.sign(
            authHeader,
            "Hovakimyannn",
            {expiresIn: 1},
            (logout, err) => {
                if (logout) {
                    res.send({msg: 'You have been Logged Out'});
                } else {
                    res.send({msg: 'Error'});
                }
            });
    }
}

module.exports = AuthController;

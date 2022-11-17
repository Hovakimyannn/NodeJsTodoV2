'use strict'

const DatabaseManager = require('../database/DatabaseManager.js');
const User = require('../models/user.model.js');
const jwt = require("jsonwebtoken");
const e = require("express");
const dataBaseManager = new DatabaseManager(User);

class AuthController {
    async login(req, res) {
        let {email, password} = req.body;
        let existingUser;
        try {
            existingUser = await dataBaseManager.getByCredentials({email: email});
            if (!existingUser) throw new Error();
        } catch (e) {
            return res
                .status(409)
                .json({
                    success: false,
                    message: "Error! Something went wrong."
                })
        }

        if (!existingUser || existingUser.password !== password) {
            console.log(existingUser.password)
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
}

module.exports = AuthController;

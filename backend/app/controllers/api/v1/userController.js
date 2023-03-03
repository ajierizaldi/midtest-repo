require('dotenv').config()
const model = require('../../../models');
// const { genSalt, hash, compareSync } = require('bcrypt')
const jwt = require('jsonwebtoken')

// const cryptPassword = async (password) => {
//     const salt = await genSalt(12)
//     return hash(password, salt)
// }

module.exports = {
    register: async (req, res) => {
        try {
            let data = {
                nama_user: req.body.nama_user,
                password: req.body.password,
                email: req.body.email
            }

            const query = {
                username: req.body.username
            }

            const resultuser = await model.user.findOne({ where: query })

            if (resultuser) {
                return res.json({ message: "Username has been used" })
            } else {
                data.username = query.username
                model.user.create(data)
                    .then(result => {
                        res.json({
                            message: "data has been inserted"
                        })
                    })
                    .catch(error => {
                        res.json({
                            message: error.message
                        })
                    })
            }

            // const data = await model.user.create({
            //     ...req.body,
            //     password: await cryptPassword(req.body.password),
            // })
            // res.status(200).send({
            //     status: true,
            //     message: "Register success",
            //     data: data
            // })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                status: false,
                message: "Register failed",
                data: error
            })
        }
    },
    login: async (req, res) => {
        try {
            let data = {
                username: req.body.username,
                password: req.body.password
            }

            const resultUser = await model.user.findOne({ where: data })
            if (resultUser) {
                let payload = JSON.stringify(resultUser)
                // generate token
                let token = jwt.sign(payload, process.env.JWT_SECRET)
                res.json({
                    logged: true,
                    data: resultUser,
                    token: token
                })
            } else {
                res.json({
                    logged: false,
                    message: "Invalid username or password"
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({
                status: false,
                message: "Login failed",
                data: error
            })
        }
    },
}
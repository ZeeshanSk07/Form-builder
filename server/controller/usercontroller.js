const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');

function signup() {
    return async (req, res, next) => {
        try {
            const { username, email, password } = req.body;

            // Check if the request body contains all required fields
            if (!username || !email || !password) {
                return res.status(400).json({
                    message: 'Please provide username, email, and password',
                });
            }

            const existingUser = await User.findOne({ email });

            if (existingUser) {
                return res.status(400).json({
                    message: 'User already exists, please use another email address',
                });
            } else {
                const hashedPassword = await bcrypt.hash(password, 10);
                const newUser = new User({
                    username,
                    email,
                    password: hashedPassword,
                });

                await newUser.save();
                res.status(201).json({
                    message: 'User created successfully',
                    user: newUser,
                });
            }
        } catch (error) {
            next(error); // Pass the error object directly to next
        }
    };
}

function login() {
    return async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const existingUser = await User.findOne({ email: email });

            if (existingUser) {
                const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
                if (isPasswordCorrect) {
                    const token = jwt.sign(
                        { userID: existingUser._id }, //PAYLOAD (object you to convert to a string/token)
                        'secret', // Secret Key, key that is being used to encrypt and validation signature
                        { expiresIn: '1h' } //Optional argument, to make the token temporary 
                    );
                    res.status(200).json({
                        message: 'Login successful',
                        email: existingUser.email,
                        username: existingUser.username,
                        id: existingUser._id,
                        token
                    });

                    // a jsonwebtoken is a string that tells the server that the user is authenticated
                } else {
                    res.status(400).json({
                        message: 'Invalid credentials',
                    });
                }
            } else {
                res.status(400).json({
                    message: 'User not found',
                });
            }
        } catch (error) {
            next("Error Logging In", error);
        }
    };
}

const Updateuser = () => {
    return async (req, res) => {
        try {
            const userId = req.params.id;
            const { username, email, oldpassword, newpassword } = req.body;

            if (!username || !email || !oldpassword || !newpassword) {
                return res.status(400).json({ message: 'Please provide all required fields' });
            }

            const userone = await User.findById(userId);
            if (!userone) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Corrected bcrypt comparison
            const ispasscorrect = await bcrypt.compare(oldpassword, userone.password);
            if (!ispasscorrect) {
                return res.status(401).json({ message: 'Invalid Password' });
            }

            userone.username = username;
            userone.email = email;
            userone.password = await bcrypt.hash(newpassword, 10); // Hash the new password

            await userone.save();

            res.json({
                message: 'User updated successfully',
                user: userone
            });
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    }
}


module.exports = {
    signup,
    login,
    Updateuser,
};
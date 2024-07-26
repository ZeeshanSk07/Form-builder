
const Theme = require('../model/Theme');

const newTheme = () => {
    return async (req, res) => {
        try {
            const { theme, user} = req.body;
            
            if (!theme || !user) {
                return res.status(400).json({ message: 'Please provide theme and user' });
            }

            const themeOne = new Theme({
                theme,
                user
            });
             await themeOne.save();
             res.status(201).json({
                message: 'Theme created successfully',
                themeid: themeOne._id
             });
             } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    }
}

const GetTheme = () => {
    return async (req, res) => {
        try {
            const userId = req.params.id;

            const themes = await Theme.findOne({user : userId });
            res.json({ themes });
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    }
}

const SetTheme = () => {
    return async (req, res) => {
        try {
            const themeId = req.params.id;
            const {theme} = req.body;

            const user = await Theme.findByIdAndUpdate(themeId, {theme});
            res.json({ 
                message: 'Theme updated.',
                user
             });
        } catch (error) {
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    }
}

module.exports = {
    newTheme,
    GetTheme,
    SetTheme
}
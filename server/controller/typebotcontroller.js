const Typebot = require('../model/Typebot');

const GetTypebots = () =>{
    return async (req, res) => {
        try {
            const userId = req.params.id;
            const parent = req.body;
            const typebots = await Typebot.find({userId: userId, parent: parent});
            res.status(200).json({ 
                message: 'typebot found',
                typebots 
            });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

const CreateTypebot = () => {
    return async (req, res) => {
        try {
            const {formName , selectedbtn, userId, parent} = req.body;
            const newTypebot = new Typebot({
                formName,
                selectedbtn,
                userId,
                parent: parent? parent : null 
             });
            await newTypebot.save();
            res.status(201).json({ message: 'Typebot Saved', newTypebot }); 
            ///checking for direct output instead of newtypebot.newTypebot
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

const UpdateTypebot = () => {
    return async (req, res) => {
        try {
            const typebotId = req.params.id;
            const { formName, selectedbtn } = req.body;
            const updatedTypebot = await Typebot.findByIdAndUpdate(typebotId,{formName, selectedbtn});
            console.log(updatedTypebot);
            res.status(200).json({ message: 'Typebot updated successfully', updatedTypebot });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

const DeleteTypebot = () => {
    return async (req, res) => {
        try {
            const typebotId = req.params.id;
            await Typebot.findByIdAndDelete(typebotId);
            res.status(200).json({ message: 'Typebot deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = {
    GetTypebots,
    CreateTypebot,
    UpdateTypebot,
    DeleteTypebot
}
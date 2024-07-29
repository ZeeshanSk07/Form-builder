const Response = require('../model/Response');

const sendResponse = async(req, res) => {

    try {
        const typebotId = req.params.id;
        const { response } = req.body;

        if (!response ||!typebotId) {
            return res.status(400).json({ message: 'response and typebot not found' });
        }

        const responseOne = new Response({
            response,
            typebotId
        });
        await responseOne.save();
        res.status(201).json({
            message: 'Response created successfully',
            responseid: responseOne._id
        });
    }catch(err){
        console.log(er);
        return res.status(500).json({ message: 'Server error' });
    }
};

const getResponse = async(req, res) => {
    try {
        const typebotId = req.params.id;
        const response = await Response.find({ typebotId: typebotId});
        res.json(response);
        
    } catch(err){
        console.log(err);
        return res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {sendResponse, getResponse};
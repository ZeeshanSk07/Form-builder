const Folder = require('../model/Create'); // Ensure the path is correct

// Function to create a new folder
const newfolder = async (req, res) => {
    const folderName = req.body.foldName;
    if (!folderName) {
        return res.status(400).send('Folder name is required');
    }

    try {
        // Create a new folder document
        const folder = new Folder({
            name: folderName,
        });

        // Save the folder document to the database
        const result = await folder.save();
        return res.status(201).send({
            message: 'Folder created successfully',
            folderid: result._id,
        }) 
    }catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).send('Failed to create folder');
    }
};

const deletefolder = async(req, res) => {
    const folderId = req.params.id;

    try {
        const folder = await Folder.findByIdAndDelete(folderId);
        if (!folder) {
            return res.status(404).send('Folder not found');
        }
        return res.send({
            message:'Folder deleted successfully',

        });
    } catch (err) {
        return res.status(500).send('Failed to delete folder');
    }
};

const getfolders = (req, res) => {
    try{ const folders = Folder.find({});
    res.json(folders);
}catch(err){ res.status(400).json('Error:'+ err);}

}

module.exports = { newfolder, deletefolder, getfolders };

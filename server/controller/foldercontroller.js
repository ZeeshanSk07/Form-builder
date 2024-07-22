const Folder = require('../model/Create'); // Ensure the path is correct

// Function to create a new folder
const newfolder = async (req, res) => {
    const folderName = req.body.folderName;
    const parentFolderId = req.body.parentFolderId || null; 

    if (!folderName) {
        return res.status(400).send('Folder name is required');
    }

    try {
        // Create a new folder document
        const folder = new Folder({
            name: folderName,
            parent: parentFolderId
        });

        // Save the folder document to the database
        const result = await folder.save();
        return res.status(201).send(`New folder created with the following id: ${result._id}`);
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(500).send('Failed to create folder');
    }
};


module.exports = { newfolder };

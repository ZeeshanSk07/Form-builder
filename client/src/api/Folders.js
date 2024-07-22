import axios from 'axios';
const Backend_Url = 'http://localhost:4000';

const CreateFolder = async (foldName) => {
    try {
        const response = await axios.post(`${Backend_Url}/createfolder`, { foldName });
        return response;
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
}

const DeleteFolder = async (folderId) => {
    try {
        const response = await axios.delete(`${Backend_Url}/deletefolder/${folderId}`);
        return response;
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
}

const GetFolders = async(req, res) => {
    try {
        const response = await axios.get(`${Backend_Url}/getfolders`);
        const data = await response.json();
        if (response.ok) {
            return data; // Assuming `data` is an array of folders
        } else {
            console.error('Failed to fetch folders:', data);
            return [];
        }
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
}

export {CreateFolder, DeleteFolder, GetFolders} ;
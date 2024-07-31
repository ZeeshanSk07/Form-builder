import axios from 'axios';
const Backend_Url = 'https://form-builder-rzmo.vercel.app';

const CreateFolder = async (foldName, userId) => {
    try {
        const response = await axios.post(`${Backend_Url}/createfolder`, { foldName, userId });
        return response;
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
}

const DeleteFolder = async (foltodel) => {
    try {
        const response = await axios.delete(`${Backend_Url}/deletefolder/${foltodel}`);
        return response;
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
}

const GetFolders = async (userId) => {
    try {
        const response = await axios.get(`${Backend_Url}/getfolders`, {
            params: { userId }
        });
        return response.data;  // Assuming the response contains the folder data directly
    } catch (err) {
        return {
            status: err.response ? err.response.status : 500,
            data: err.response ? err.response.data : { message: 'Internal Server Error' }
        };
    }
};




export {CreateFolder, DeleteFolder, GetFolders} ;

import axios from 'axios';
const Backend_Url = '';

const CreateFolder = async (foldName, userId) => {
    try {
        const response = await axios.post(`/createfolder`, { foldName, userId });
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
        const response = await axios.delete(`/deletefolder/${foltodel}`);
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
        const response = await axios.get(`/getfolders`, {
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

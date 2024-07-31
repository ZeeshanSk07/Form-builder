import axios from 'axios';

const Backend_Url = 'http://localhost:4000';

const saveResponse = async(typebotId, response) =>{
    try{
        const resp = await axios.post(`/response/bot/${typebotId}`, { response });
        return resp;
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
 
}

const getResponse = async(typebotId) => {
    try{
        const resp = await axios.get(`/response/getResponse/${typebotId}`);
        console.log(resp);
        return resp;
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
 };

export {saveResponse, getResponse};
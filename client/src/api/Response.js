import axios from 'axios';

const Backend_Url = 'https://form-builder-e94g.onrender.com';

const saveResponse = async(typebotId, response) =>{
    try{
        const resp = await axios.post(`${Backend_Url}/response/bot/${typebotId}`, { response });
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
        const resp = await axios.get(`${Backend_Url}/response/getResponse/${typebotId}`);
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
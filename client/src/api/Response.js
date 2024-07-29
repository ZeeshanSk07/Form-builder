import axios from 'axios';

const Backend_Url = 'http://localhost:4000';

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

export {saveResponse};
import axios from 'axios';
const Backend_URL = 'https://form-builder-e94g.onrender.com';


const getView = async (typebotId) => {
    try {
      const response = await axios.get(`${Backend_URL}/response/getView/${typebotId}`);
      console.log(response);
      return response;
      
    }  catch (err) {
      console.error('Internal server error:', err);
      return { status: 500, data: { message: 'Internal Server Error' } };
    }
}

export { getView };
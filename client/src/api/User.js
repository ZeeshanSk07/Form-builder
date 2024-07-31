import axios from 'axios';

const Backend_Url = 'https://form-builder-e94g.onrender.com';


const Login = async (email, password) => {
    try {
        const response = await axios.post(`${Backend_Url}/user/login`, { email, password });
        return response;
    } catch (err) {
        return {
            status: err.response ? err.response.status : 500,
            data: err.response ? err.response.data : { message: 'Internal Server Error' }
        };
    }
};

const Signup = async (username, email, password) => {
    try {
        const response = await axios.post(`${Backend_Url}/user/signup`, { username, email, password });
        console.log(response);
        return response;
    } catch (err) {
        return {
            status: err.response ? err.response.status : 500,
            data: err.response ? err.response.data : { message: 'Internal Server Error' }
        };
    }
};

const Updateuser = async(userId, updusername, updemail, oldpassword, newpassword) => {
    try {
        const response = await axios.put(`${Backend_Url}/user/update/${userId}`, { updusername, updemail, oldpassword, newpassword });
        return response;
    } catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        }
    }
}

const verifyToken = async (token) => {
    try {
      const response = await axios.get(`${Backend_Url}/verifytoken`, {
        headers: { 'Authorization': token }
      });
      
      return response.data;
    } catch (error) {
      console.error('Error verifying token:', error);
    }
  };

export { Login, Signup , verifyToken, Updateuser};

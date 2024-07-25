import axios from 'axios';

const Backend_Url = 'http://localhost:4000';

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
        return response;
    } catch (err) {
        return {
            status: err.response ? err.response.status : 500,
            data: err.response ? err.response.data : { message: 'Internal Server Error' }
        };
    }
};

const Updateuser = async(userId, username, email, password, newpassword) => {
    try {
        const response = await axios.put(`${Backend_Url}/user/${userId}`, { username, email, password, newpassword });
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

export { Login, Signup , verifyToken};

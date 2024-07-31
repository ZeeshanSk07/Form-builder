import axios from 'axios';


const Login = async (email, password) => {
    try {
        const response = await axios.post(`/user/login`, { email, password });
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
        const response = await axios.post(`/user/signup`, { username, email, password });
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
        const response = await axios.put(`/user/update/${userId}`, { updusername, updemail, oldpassword, newpassword });
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
      const response = await axios.get(`/verifytoken`, {
        headers: { 'Authorization': token }
      });
      
      return response.data;
    } catch (error) {
      console.error('Error verifying token:', error);
    }
  };

export { Login, Signup , verifyToken, Updateuser};

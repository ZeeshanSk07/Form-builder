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

export { Login, Signup };

import axios from 'axios';
const Backend_Url = 'https://form-builder-e94g.onrender.com';

const defaultTheme = async(theme, user)=>{
    try{
        const response = await axios.post(`${Backend_Url}/user/theme`, { theme, user });
        console.log('theme response', response);
        return response;
    } catch (err) {
        return {
            status: err.response ? err.response.status : 500,
            data: err.response ? err.response.data : { message: 'Internal Server Error' }
        };
    }
}

const GetTheme = async(userId) => {
    try{
        const response = await axios.get(`${Backend_Url}/user/gettheme/${userId}`);
        return response.data;
    }
    catch (err) {
        return {
            status: err.response? err.response.status : 500,
            data: err.response? err.response.data : { message: 'Internal Server Error' }
        };
    }
}

const updateTheme = async(themeId, theme) =>{
    try{
        const response = await axios.put(`${Backend_Url}/user/theme/${themeId}`, {theme});
        return response;
    }
    catch (err) {
        return {
            status: err.response ? err.response.status : 500,
            data: err.response ? err.response.data : { message: 'Internal Server Error' }
        };
    }
    
}

export { defaultTheme, GetTheme, updateTheme};


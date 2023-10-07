import Api from '../../utils/Api';

const API_URL = '/api/auth';

// Register user
const register = async (userData) => {
    const response = await Api.post(API_URL + "/register", userData);

    if (!response) return;

    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

const login = async (userData) => {
    const response = await Api.post(API_URL + "/login", userData);

    if(!response) return;

    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
}

const updateUser = async (userData) => {
    const response = await Api.put(API_URL + "/profile", userData);

    if (!response) return;

    return userData;
}

const authService = {
    register,
    login,
    updateUser,
}

export default authService;
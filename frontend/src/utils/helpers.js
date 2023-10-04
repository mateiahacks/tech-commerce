
export function errorMessage(error) {
    return (error.response && error.response.data && error.response.data.message) 
        || error.mesage || error.toString();
}
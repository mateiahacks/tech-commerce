
export function errorMessage(error) {
    return (error.response && error.response.data && error.response.data.message) 
        || error.mesage || error.toString();
}

export function isInCart(arr, product) {
    const newArr = arr.filter((item) => item.product._id === product._id);
    return newArr.length > 0;
}

export function getIndex(arr, product) {
    const newArr = arr.map((item, i) => item.product._id === product._id ? i : null)
    .filter((item) => item !== null);

    return newArr[0];
}
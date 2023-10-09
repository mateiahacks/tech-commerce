import Api from '../../utils/Api';

const API_URL = '/api/products';

// Create product
const createProduct = async (productData) => {
    const response = await Api.post(API_URL, productData);

    if (!response) return;

    return response.data;
}

const getProducts = async (params) => {
    const response = await Api.get(API_URL, params);

    if (!response) return;

    return response.data;
}

const updateProduct = async (productData) => {
    const response = await Api.put(`${API_URL}/${productData.id}`,  { ...productData, id: null });

    if(!response) return;

    return response.data;
}

const productService = {
    createProduct,
    getProducts,
    updateProduct,
}

export default productService;
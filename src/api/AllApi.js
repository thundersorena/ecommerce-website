import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

const getAllProducts = async () => {
    const response = await axios.get(BASE_URL);
    console.log(response)
    return response.data;
}
export { getAllProducts };

const BASE_URL2 = "https://fakestoreapi.com/products/categories";

 const categories = async () => {
    const response = await axios.get(BASE_URL2);
    console.log(response.data)
    return response.data;
}

export {categories};
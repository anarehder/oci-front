import axios from "axios";

const BASE_URL = "http://172.16.255.56:4000";

function getReshape() {
    console.log(BASE_URL);
    return axios.get(`${BASE_URL}/reshape`);
}


const apiService = { getReshape };

export default apiService;
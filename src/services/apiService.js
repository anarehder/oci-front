import axios from "axios";

const BASE_URL = "http://172.16.255.57:4000";
// const BASE_OCI_URL = "https://apexapps.oracle.com/pls/apex/cetools/api/v1/products/";

function getReshape() {
    console.log(BASE_URL);
    return axios.get(`${BASE_URL}/reshape`);
}

function getContracts() {
    console.log(BASE_URL);
    return axios.get(`${BASE_URL}/contracts`);
}

// function getOCIPrices() {
//     return axios.get(BASE_OCI_URL);
//     // response.items.forEach((item) => {
//     //     item.currencyCodeLocalizations = item.currencyCodeLocalizations.filter(localization => localization.currencyCode === "BRL");
//     //     }
//     // );
// }

const apiService = { getReshape, getContracts };

export default apiService;
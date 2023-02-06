import axios from "axios";
import { parse, stringify } from "qs";

const axiosConfig = axios.create({
    baseURL: 'http://172.27.106.100:19001',
    paramsSerializer: {
        encode: parse,
        serialize: stringify
    },
    timeout: 60000 // request timeout
});

export default axiosConfig;
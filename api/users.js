import axiosConfig from "./axiosConfig";

export const getAgentsAPI = () => {
    return axiosConfig({
        url: "/IT",
        method: "GET"
    });
}
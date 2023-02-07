import axiosConfig from "./axiosConfig";

export const getAgentsAPI = async () => {
    return await axiosConfig({
        url: "/IT",
        method: "GET"
    });
}
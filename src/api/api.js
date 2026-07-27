import axios from "axios";

export const api = axios.create({
    baseURL: "https://6a4141f61ff1d27becc167de.mockapi.io",
});

export const getUser = async (id = 1) => {
    const { data } = await api.get(`/user/${id}`);
    return data;
};
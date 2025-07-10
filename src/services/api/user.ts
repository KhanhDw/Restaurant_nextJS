import { axiosInstance } from './axoiClient';


export async function fetchUser() {
    const response = await axiosInstance.get('/users');
    console.log(response.data);
    return response.data;
}

export async function CreateUser(data: { name: string; email: string; password: string }) {
    const response = await axiosInstance.post(`/users`, data);
    return response.data;
}



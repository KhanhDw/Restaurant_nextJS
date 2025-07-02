import { axiosInstance } from './axoiClient';

export async function fetchUser() {
   const response = await axiosInstance.get('/users');
    return response.data;
}



// export async function fetchUserById(id: number) {
//     const res = await fetch(`${serverAddress}/users/${id}`, {
//         cache: 'no-store',
//     });

//     if (!res.ok) {
//         throw new Error(`Lỗi khi fetch user với ID ${id}`);
//     }

//     return res.json() as Promise<User>;
// }
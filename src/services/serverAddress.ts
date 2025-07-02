
function serverAddress() {
    // Lấy địa chỉ máy chủ từ biến môi trường
    const address = 'https://127.0.0.1:3001';

    // Kiểm tra xem địa chỉ máy chủ có được định nghĩa không
    if (!address) {
        throw new Error("NEXT_PUBLIC_SERVER_ADDRESS is not defined");
    }

    // Trả về địa chỉ máy chủ
    return address;
}

export default serverAddress;
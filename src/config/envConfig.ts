// nhiệm vụ của file sẽ báo nếu tên trong file .env và tên bên ngoài gọi khác nhau
// vì thông thường thì khi ghi sai tên .env thì sẽ không báo lỗi
import z from 'zod'


const configSchema = z.object({
    NEXT_PUBLIC_SERVER_ADDRESS: z.string()
})

const configProject = configSchema.safeParse({
    NEXT_PUBLIC_SERVER_ADDRESS: process.env.NEXT_PUBLIC_SERVER_ADDRESS
    // cấu hình thêm các trường trong file env vào đây
})

if (!configProject.success){
    console.error(configProject.error.issues)
    throw new Error("Các giá trị khai báo trong file .env không hợp lệ")
}

const envConfig = configProject.data
export default envConfig
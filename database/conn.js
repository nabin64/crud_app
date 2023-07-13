import mongoose from "mongoose"
const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect('mongodb://127.0.0.1:27017/crud_app')
        if (connection.readyState == 1) {
            console.log("Database connected")
        }
    } catch (error) {
        return Promise.reject(error)

    }
}


export default connectMongo;
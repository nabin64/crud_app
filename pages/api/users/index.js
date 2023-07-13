// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/database/conn";
import { getUsers, postUser, putUser, deleteUser } from "@/database/controller";

export default async function handler(req, res) {
    // Connect to MongoDB
    await connectMongo().catch(() =>
        res.status(405).json({ error: "Error in connection" })
    );

    // Enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    ///// type of request ////

    const { method } = req;

    switch (method) {
        case "OPTIONS":
            // Preflight request handling
            res.status(200).end();
            break;
        case "GET":
            getUsers(req, res);
            break;
        case "POST":
            postUser(req, res);
            break;
        case "PUT":
            putUser(req, res);
            break;
        case "DELETE":
            deleteUser(req, res);
            break;
        default:
            res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
            res.status(405).end(`Method ${method} Not allowed`);
            break;
    }
}

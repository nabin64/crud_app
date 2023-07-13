// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectMongo from "@/database/conn";
import { getUser, postUser, putUser, deleteUser } from "@/database/controller";


export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in connection" }))
    // type of request
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");



    const { method } = req
    switch (method) {
        case "OPTIONS":
            // Preflight request handling
            res.status(200).end();
            break;
        case 'GET':
            getUser(req, res);
            break;
        case 'POST':
            postUser(req, res)
            break;
        case 'PUT':
            putUser(req, res)
            break;
        case 'DELETE':
            deleteUser(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} NOt allowed`)
            break;

    }
}
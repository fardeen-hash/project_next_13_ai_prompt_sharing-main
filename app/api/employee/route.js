import Employee from "@models/employee";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const employees = await Employee.find({}).populate('creator')

        return new Response(JSON.stringify(employees), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 
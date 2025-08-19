import { connectToDatabase } from "@/app/lib/mongodb";
import User from "@/app/models/user";


import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    switch(req.method){
        case 'GET':
            try {
                const users = await User.find({});
                res.status(200).json(users);
            } catch (error) {
                res.status(500).json({ error: 'Failed to fetch users' });
            }
            break;
        case 'POST':
            try {
                const { username, email, password } = req.body;
                const newUser = new User({ username, email, password });
                await newUser.save();
                res.status(201).json(newUser);
            } catch (error) {
                res.status(500).json({ error: 'Failed to create user' });
            }
            break;
            case "PATCH":
            try {
                const { id, ...updateData } = req.body;
                const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
                if (!updatedUser) {
                    return res.status(400).send({error:"user not found"})
                }
                res.status(200).json(updatedUser);
            }catch(err){
                res.status(500).json({ err: 'Failed to update user' });
            }
            break;
            case "DELETE":
                try{
                    const {id} = req.body;
                    const deleteUser = await User.findByIdAndDelete(id);
                    if(!deleteUser){
                        return res.status(400).send({error:"user not found"})
                    }
                    res.status(200).json({message:"user deleted successfully"})
                }catch(err){
                    res.status(400).json({err:"failed to delete user"})
                }
                break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


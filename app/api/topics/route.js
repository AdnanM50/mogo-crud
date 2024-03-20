import { NextResponse } from 'next/server';
import connectMongodb from '../../../libs/mongodb';

export default async function POST(request) {
    const { title,description } = await request.json ();
    await connectMongodb();
    await Topic.create({ title, description });
    
    return NextResponse.json({ message: "Topic created successfully"},{status: 201});
}
// src/app/api/components/route.ts
import { NextResponse } from 'next/server';
import { fetchComponents } from '@/frameworks/components/fetchComponent'; // Adjust the path accordingly

export async function GET() {
    const components = await fetchComponents();
    return NextResponse.json(components);
}

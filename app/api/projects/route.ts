import { NextResponse } from 'next/server';
import dynamicData from '../../projects/dynamic-projects.json';

export const runtime = 'edge';

export async function GET() {
    return NextResponse.json(dynamicData);
}

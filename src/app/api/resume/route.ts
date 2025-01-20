import { NextResponse } from 'next/server';
import { resumeData } from '@/data/resume';

export async function GET() {
    return NextResponse.json(resumeData);
} 
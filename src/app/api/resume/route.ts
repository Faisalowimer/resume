import { NextRequest, NextResponse } from 'next/server';
import { resumeData } from '@/data/resume';

const ALLOWED_ORIGINS = [
    'https://owimer.co',
    'https://www.owimer.co',
    'https://resume.owimer.co',
];

function corsHeaders(origin: string | null) {
    const allowed = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
    return {
        'Access-Control-Allow-Origin': allowed,
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
}

export async function OPTIONS(request: NextRequest) {
    const origin = request.headers.get('origin');
    return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export async function GET(request: NextRequest) {
    const origin = request.headers.get('origin');

    // Strip personal contact details from the public API response
    const { contact, ...publicData } = resumeData;
    const { phone: _phone, email: _email, ...publicContact } = contact;

    return NextResponse.json(
        { contact: publicContact, ...publicData },
        { headers: corsHeaders(origin) }
    );
}

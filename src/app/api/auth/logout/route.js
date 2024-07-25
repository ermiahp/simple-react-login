// import { signIn } from '@/auth'
import { serialize } from 'cookie'
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
	return new NextResponse({
		status: 404,
	})
}

export async function GET() {
	try {
		const cookieStore = cookies();
		cookieStore.set('currentUser', null);
		return new NextResponse({
			status: 200,
			body: { success: true },
			headers: {
				'Set-Cookie': null
			}
		})
	} catch (error) {
		return new NextResponse({
			status: 500,
			body: { error: 'Something went wrong.' }
		})
	}
}

export async function HEAD() {
	return new NextResponse({
		status: 404,
	})
}

export async function PUT() {
	return new NextResponse({
		status: 404,
	})
}

export async function DELETE() {
	return new NextResponse({
		status: 404,
	})
}

export async function PATCH() {
	return new NextResponse({
		status: 404,
	})
}
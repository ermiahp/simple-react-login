// import { signIn } from '@/auth'
import { serialize } from 'cookie'
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const signIn = async (provider, credentials) => {
	return true;
};

const encrypt = (data) => {
	return data;
}

export async function POST(req, res) {
	try {
		const sessionData = req.body
		const encryptedSessionData = encrypt(sessionData)

		const cookie = serialize('session', sessionData, {
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7, // One week
			path: '/',
		})

		const cookieStore = cookies();
		cookieStore.set('currentUser', cookie);
		const { email, password } = req.body
		await signIn('credentials', { email, password })

		return new NextResponse({
			status: 200,
			body: { success: true },
			headers: {
				'Set-Cookie': cookie
			}
		})
	} catch (error) {
		if (error.type === 'CredentialsSignin') {
			return new NextResponse({
				status: 401,
				body: { error: 'Invalid credentials.' }
			})
		} else {
			return new NextResponse({
				status: 500,
				body: { error: 'Something went wrong.' }
			})
		}
	}
}

export async function GET(request) {
	return new NextResponse({
		status: 404,
	})
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
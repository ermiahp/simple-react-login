"use client";
import { Container } from '@mui/material';
import styles from './styles.module.css';
import LoginCard from '@/components/LoginCard';
import { useRouter } from 'next/navigation'
import { loginURL } from '@/constants/urls';

const Login = () => {
	const router = useRouter();

	const handleSubmit = async (event) => {
		const { username, password } = event;
		if (!username || !password) {
			alert('Please enter username and password');
			return;
		}
		const response = await fetch(loginURL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		})

		if (response.ok) {
			router.push('/dashboard')
		} else {
			alert('Something went wrong, try again');
		}
	};

	return (
		<Container className={styles.container}>
			<LoginCard handleSubmit={handleSubmit} />
		</Container>
	);
};

export default Login;

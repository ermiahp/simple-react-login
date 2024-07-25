"use client";
import { Container } from '@mui/material';
import styles from './styles.module.css';
import ProfileCard from '@/components/ProfileCard';
import { useRouter } from 'next/navigation';
import { logoutURL } from '@/constants/urls';

const Dashboard = () => {
	const router = useRouter();

	const logout = async () => {
		const response = await fetch(logoutURL, {
			method: 'GET',
		})

		if (response.ok) {
			router.push('/')
		} else {
			alert('Something went wrong, try again');
		}
	};
	return (
		<Container className={styles.container}>
			<ProfileCard logout={logout} />
		</Container>
	);
};

export default Dashboard;

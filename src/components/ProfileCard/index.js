"use client";
import React from 'react';
import styles from './styles.module.css';

import {
	Card,
	CardContent,
	Typography,
	Button,
} from '@mui/material';

const userData = {
	username: 'admin',
	first_name: 'Admin',
	last_name: 'User',
	email: 'admin@example.com',

};
const ProfileCard = ({ logout }) => {
	return (
		<Card className={styles.card}>
			<CardContent className={styles.cardContent}>
				{Object.keys(userData).map((key) => (
					<Typography key={key} variant="body2" component="p">
						{key}: {userData[key]}
					</Typography>
				))}
				<Button onClick={logout}>Logout</Button>
			</CardContent>

		</Card>
	);
};

export default ProfileCard;

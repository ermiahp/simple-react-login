import React from 'react';
import styles from './styles.module.css';

import {
	Card,
	CardContent,
	Typography,
	TextField,
	Button,
	Box,
} from '@mui/material';

const LoginCard = ({ handleSubmit }) => {
	const [username, setUsername] = React.useState('');
	const [password, setPassword] = React.useState('');

	const _handleSubmit = () => handleSubmit({ username, password });

	return (
		<Card className={styles.card}>
			<CardContent className={styles.cardContent}>
				<Typography variant="h5" component="div">
					Login
				</Typography>
				<Typography variant="body2" component="p">
					Please login to continue.
				</Typography>
				<Box
					noValidate
					autoComplete="off"
					className={styles.form}
				>
					<TextField
						label="Username"
						variant="standard"
						name='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						fullWidth
						sx={{
							'& .MuiInputBase-root': {
								height: 56,
							},
							'& .MuiFormLabel-root': {
								fontSize: 16,
							},
						}}
					/>
					<TextField
						id="password"
						label="Password"
						variant="standard"
						fullWidth
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						sx={{
							'& .MuiInputBase-root': {
								height: 56,
							},
							'& .MuiFormLabel-root': {
								fontSize: 16,
							},
						}}
					/>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						className={styles.button}
						onClick={_handleSubmit}
					>
						Login
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default LoginCard;

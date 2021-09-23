import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';

import useCities from '../../hooks/useCities';
import MenuList from '../MenuList';
import useAddCity from '../../hooks/useAddCity';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
	margin: {
		margin: theme.spacing(1),
	},

	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function AddCity() {
	const { cities, citiesApi } = useCities();
	const { addCityApi } = useAddCity();
	const [isLoading, setisLoading] = useState(true);

	const [id, setid] = useState(0);
	const [cityName, setcityName] = useState('');
	const [locations, setlocations] = useState([]);
	const [cityCode, setcityCode] = useState('');

	useEffect(() => {
		async function citiesData() {
			setisLoading(true);
			await citiesApi();
			setisLoading(false);
		}
		citiesData();
	}, []);

	const onSubmit = async (e) => {
		e.preventDefault();
		setisLoading(true);
		await addCityApi({ id, name: cityName, code: cityCode, locations });
		setisLoading(false);
	};

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<MenuList cities={cities} />
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth='lg' className={classes.container}>
					<CssBaseline />
					<main>
						{/* Hero unit */}
						<div className={classes.heroContent}>
							<Container maxWidth='sm'>
								<Typography
									component='h1'
									variant='h2'
									align='center'
									color='primary'
									gutterBottom
								>
									ADD A LOCATION
								</Typography>
							</Container>
						</div>
						<ToastContainer
							position='top-center'
							autoClose={5000}
							hideProgressBar={false}
							newestOnTop={false}
							closeOnClick
							rtl={false}
							pauseOnFocusLoss
							//draggable
							pauseOnHover
						/>

						<Container className={classes.cardGrid} maxWidth='md'>
							<div className={classes.paper}>
								<form onSubmit={onSubmit}>
									<div className={classes.form} noValidate>
										<TextField
											variant='outlined'
											margin='normal'
											required
											fullWidth
											id='id'
											label='City id'
											name='id'
											autoComplete='id'
											autoFocus
											onChange={(e) => setid(e.target.value)}
										/>
										<TextField
											variant='outlined'
											margin='normal'
											required
											fullWidth
											id='locations'
											label='City locations'
											name='locations'
											autoComplete='locations'
											autoFocus
											onChange={(e) => setlocations(e.target.value)}
										/>
										<TextField
											variant='outlined'
											margin='normal'
											required
											fullWidth
											id='cityName'
											label='City name'
											name='cityName'
											autoComplete='cityName'
											autoFocus
											onChange={(e) => setcityName(e.target.value)}
										/>
										<TextField
											variant='outlined'
											margin='normal'
											required
											fullWidth
											id='cityCode'
											label='City code'
											name='cityCode'
											autoComplete='cityCode'
											autoFocus
											onChange={(e) => setcityCode(e.target.value)}
										/>

										{isLoading === true ? (
											<div className={classes.heroContent}>
												<Container maxWidth='sm'>
													<CircularProgress size={40} />
												</Container>
											</div>
										) : (
											<input
												type='submit'
												value='Submit'
												className='btn btn-primary btn-block mt-4'
											/>
										)}
									</div>
								</form>
							</div>
						</Container>
					</main>
				</Container>
			</main>
		</div>
	);
}

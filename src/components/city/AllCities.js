import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import CircularProgress from '@material-ui/core/CircularProgress';
import MenuList from '../MenuList';
import useCities from '../../hooks/useCities';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';

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
	locationList: {
		listStyleType: 'none',
		marginLeft: theme.spacing(-5),
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
}));

export default function AllCities() {
	const { cities, citiesApi } = useCities();
	const [isLoading, setisLoading] = useState(false);

	useEffect(() => {
		async function citiesData() {
			setisLoading(true);
			await citiesApi();
			setisLoading(false);
		}
		citiesData();
	}, []);

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<MenuList />
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
									All Cities
								</Typography>
							</Container>
						</div>

						{isLoading ? (
							<div className={classes.heroContent}>
								<Container maxWidth='sm'>
									<CircularProgress size={100} />
								</Container>
							</div>
						) : cities.length !== 0 ? (
							<Container className={classes.cardGrid} maxWidth='md'>
								<Grid container spacing={4}>
									{cities.map((city) => (
										<Grid item key={city.id} xs={12} sm={6} md={4}>
											<Card className={classes.card}>
												<CardContent className={classes.cardContent}>
													<Typography gutterBottom variant='h5' component='h2'>
														{city.name}
													</Typography>
													<Typography>
														{city.locations.length !== 0 ? (
															<ul
																style={{
																	listStyleType: 'none',
																	borderWidth: 5,
																}}
																className={classes.locationList}
															>
																locations
																{city.locations.map((location, index) => (
																	<li key={index}>
																		<LocationOnOutlined />
																		{location}
																	</li>
																))}
															</ul>
														) : (
															'no location'
														)}
													</Typography>
												</CardContent>
												<CardActions>
													<Button fullWidth variant='contained' color='primary'>
														Delete
													</Button>
												</CardActions>
											</Card>
										</Grid>
									))}
								</Grid>
							</Container>
						) : (
							<div className={classes.heroContent}>
								<Container maxWidth='sm'>
									<Typography
										component='h4'
										variant='h4'
										align='center'
										color='gray'
										gutterBottom
									>
										No city found
									</Typography>
								</Container>
							</div>
						)}
					</main>
				</Container>
			</main>
		</div>
	);
}

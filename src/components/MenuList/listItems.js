import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocationCityOutlined from '@material-ui/icons/LocationCityOutlined';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export const mainListItems = () => {
	return (
		<div>
			<Link
				to={{
					pathname: `/`,
				}}
			>
				<ListItem button>
					<ListItemIcon>
						<LocationCityOutlined />
					</ListItemIcon>
					<ListItemText primary='All cities' />
				</ListItem>
			</Link>
			<Link to='/add-city'>
				<ListItem button>
					<ListItemIcon>
						<AddIcon />
					</ListItemIcon>
					<ListItemText primary='Add city' />
				</ListItem>
			</Link>
		</div>
	);
};

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Saved Payments</ListSubheader>

		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary='All Payments report' />
		</ListItem>
	</div>
);

import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import AddLocation from './components/./location/AddLocation';
const Dashboard = loadable(() => import('./components/./city/AllCities'));
const AddCity = loadable(() => import('./components/./city/AddCity'));

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route path='/' component={Dashboard} exact />
				<Route path='/add-city' component={AddCity} />
				<Route path='/add-location' component={AddLocation} />
			</BrowserRouter>
		</div>
	);
}
export default App;

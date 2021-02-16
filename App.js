import React, { Component } from 'react';
import Login from './Component/Login'
import Register from './Component/Register';
import Page404 from './Component/Page404';
import Dashboard from './Component/Dashboard';
import Distributor from './Component/Distributor';
import RetailerList from './Component/RetailerList';
import UserList from './Component/userlist';
import UpdateTime from './Component/form';
import PrivateRoute from './Component/PrivateRoute';
import ViewCode from './Component/viewCode';
import Default from './Component/default';
import HelpAndSupport from './Component/HelpAndSupport';
import NotificationList from './Component/NotificationList';
import coinList from './Component/coinList';
import instructionList from './Component/instructionList';
import ReportList from './Component/ReportList';
import ImagesList from './Component/ImagesList';
import List from './Component/list';
import Converse from './Component/converse';
import Explanation from './Component/explanation';
import AddExplanation from './Component/AddExplanation';
import AddConverser from './Component/AddConverser';
import AddLanguage from './Component/addLanguage';
import Language from './Component/languages';
import AddImage from './Component/AddImage';
import Game from './Component/game';
import AddGame from './Component/AddGame';
import { history } from './_helpers';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';



class App extends Component {
	render() {
		return (
			<React.Fragment>
				<HashRouter history={history}>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/forgot" component={Register} />
						<PrivateRoute exact path="/retailer" component={RetailerList} />
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
						<PrivateRoute exact path="/distributor" component={Distributor} />
						<PrivateRoute exact path="/userlist" component={UserList} />
						<PrivateRoute exact path="/updatetime" component={UpdateTime} />
						<PrivateRoute exact path="/codeview/:Code" component={ViewCode} />
						<PrivateRoute exact path="/default" component={Default} />
						<PrivateRoute exact path="/help" component={HelpAndSupport} />
						<PrivateRoute exact path="/images" component={ImagesList} />
						<PrivateRoute exact path="/notification" component={NotificationList} />
						<PrivateRoute exact path="/coin" component={coinList} />
						<PrivateRoute exact path="/instruction" component={instructionList} />
						<PrivateRoute exact path="/report" component={ReportList} />
						<PrivateRoute exact path="/list" component={List} />
						<PrivateRoute exact path="/converse" component={Converse} />
						<PrivateRoute exact path="/explanation" component={Explanation} />
						<PrivateRoute exact path="/addExplanation" component={AddExplanation} />
						<PrivateRoute exact path="/addConverser" component={AddConverser} />
						<PrivateRoute exact path="/editConverser/:_id" component={AddConverser} />
						<PrivateRoute exact path="/addImage" component={AddImage} />
						<PrivateRoute exact path="/addLanguage" component={AddLanguage} />
						<PrivateRoute exact path="/editLanguage/:_id" component={AddLanguage} />
						<PrivateRoute exact path="/language" component={Language} />
						<PrivateRoute exact path="/addGame" component={AddGame} />
						<PrivateRoute exact path="/editGame/:_id" component={AddGame} />
						<PrivateRoute exact path="/game" component={Game} />
						<PrivateRoute exact path="/editImage/:_id" component={AddImage} />
						<PrivateRoute exact path="/editExplanation/:explanationId" component={AddExplanation} />
						<Route exact path="*" component={Page404} />
					</Switch>
				</HashRouter>
			</React.Fragment>
		);
	}
}
export default App;


import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainComponent from './components/main.component';
import HomeContainer from './components/home/home.container';
import AboutComponent from './components/about/about.component';

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        injectTapEventPlugin();
    }

    componentDidMount() {
        browserHistory.push('/home');
    }

    render() {
        return (
            <MuiThemeProvider>
                <Router history={browserHistory}>
                    <Route path="/" component={MainComponent}>
                        <Route path="/home" component={HomeContainer} />
                        <Route path="/about" component={AboutComponent} />
                    </Route>
                </Router>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('mainapp'));
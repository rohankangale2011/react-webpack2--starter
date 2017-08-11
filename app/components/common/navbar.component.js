import React from 'react';
import { Link, browserHistory } from 'react-router';
import {Router, Route, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';

export default class NavBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.hanldleChange = this.hanldleChange.bind(this);
    }

    hanldleChange(value) {
        if (value === 0) {
            browserHistory.push('/home');
        } else {
            browserHistory.push('/about');
        }
    }

    render() {
        return (
            <Tabs >
                <Tab value={0} label="Home" containerElement={<Link to="/home"/>} />
                <Tab value={1} label="About" containerElement={<Link to="/about"/>} />
            </Tabs>
        );
    }
}

// <ul className="nav navbar-nav">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                 </ul>
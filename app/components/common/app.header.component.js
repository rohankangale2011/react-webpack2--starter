import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';

export default class AppHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this._toggleDrawer = this._toggleDrawer.bind(this);
    }

    _toggleDrawer() {
        let stat = !this.state.open;
        this.props.setDrawerToggle({ stat: stat });
    }

    render() {
        return (
            <div className="app-header-container">
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this._toggleDrawer}
                    />
            </div>
        );
    }
}
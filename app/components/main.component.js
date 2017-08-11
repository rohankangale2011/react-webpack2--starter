import React from 'react';
import { browserHistory } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import DrawerComponent from './common/drawer.component';
import AppHeaderComponent from './common/app.header.component';
import NavBarComponent from './common/navbar.component';

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this._setToggleDrawer = this._setToggleDrawer.bind(this);
        this._navigateTo = this._navigateTo.bind(this);
    }

    _setToggleDrawer(data) {
        if (typeof data === 'boolean') {
            this.setState({ open: data });
        } else {
            this.setState({ open: data.stat });
        }
    }

    _navigateTo(data) {
        if(data) {
            browserHistory.push('/'+data.view);
        }
        this._setToggleDrawer(false);
    }

    render() {
        return (
            <div className="app-container">
                <AppHeaderComponent setDrawerToggle={this._setToggleDrawer} />
                {/* <NavBarComponent /> */}
                <div className="root-view-container">{this.props.children}</div>
                <Drawer
                    docked={false}
                    width='25%'
                    onRequestChange={(open) => this._setToggleDrawer(open) }
                    open={this.state.open}>
                    <DrawerComponent navigate={this._navigateTo}/>
                </Drawer>
            </div>
        );
    }
}
import React from 'react';
import HomeComponent from './home.component';
import data from '../../data/data';
import '../../app.scss';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this._getData();
    }

    _getData() {
        this.setState({ data: data});
    }

    render() {
        return (
            <div className="home-container">
                <HomeComponent dataList={this.state.data}/>
            </div>
        );
    }
}

export default HomeContainer;
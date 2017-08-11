import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: ''
        };
        this._displayData = this._displayData.bind(this);
        this._showDetails = this._showDetails.bind(this);
    }

    _displayData() {
        if (this.props && this.props.dataList && this.props.dataList.responseData) {
            return this.props.dataList.responseData.map((data) => {
                return (
                    <div key={data.id} style={styles.dataItemcontainer} className="data-item" onClick={()=> this._showDetails(data)}>
                        <div style={styles.dataItem}>{data.name}</div>
                        <div style={styles.dataItemDesc}>{data.description}</div>
                    </div>
                );
            });
        } else {
            return (
                <div>No data to display</div>
            );
        }
    }

    _showDetails(data) {
        this.setState({ selectedItem: data });
    }

    render() {
        return (
            <div className="home-component">
                <div style={styles.header}>User Details</div>
                <div style={styles.dataContainer}>
                    <div style={styles.dataHeader}>Name</div>
                    <div style={styles.dataHeader}>Description</div>
                    {this._displayData()}
                </div>
                <div style={styles.showSelectedContainer}>
                    {
                        this.state.selectedItem === '' ? <div>No selected Item</div> : 
                        <div>
                            <div style={styles.selectedHeadContainer}>Selected Item:</div>
                            <div><strong>Name:</strong> {this.state.selectedItem.name}</div>
                            <div><strong>Description:</strong> {this.state.selectedItem.description}</div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const styles = {
    header: {
        fontSize: '22px',
        fontWeight: 'bold',
        padding: '10px 0 10px 15px',
        borderBottom: '1px solid #ddd'
    },
    dataContainer: {
        padding: '10px'
    },
    dataItemcontainer: {
        overflow: 'hidden',
        width: '100%'
    },
    dataHeader: {
        float: 'left',
        width: '100px',
        fontWeight: 'bold',
        padding: '10px 10px 12px 10px',
        fontSize: '16px'
    },
    dataItem: {
        float: 'left',
        width: '100px',
        padding: '10px'
    },
    dataItemDesc: {
        float: 'left',
        width: '200px',
        padding: '10px'
    },
    showSelectedContainer: {
        padding: '15px'
    },
    selectedHeadContainer: {
        fontSize: '17px',
        paddingBottom: '5px'
    }
}
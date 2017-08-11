import React from 'react';

export default class DrawerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._navigateTo = this._navigateTo.bind(this);
    }

    _navigateTo(index) {
        this.props.navigate({view: index});
    }

    render() {
        return (
            <div className="drawer-container">
                <div style={styles.mainContainer}>
                    <div style={styles.iconMain}>
                        <div style={styles.icon}></div>
                    </div>
                    <div style={styles.nameMain}>
                        <div style={styles.name}>Username</div>
                        <div style={styles.designation}>Student</div>
                    </div>
                </div>
                <div className="itemHover" style={styles.navItem} onClick={()=>this._navigateTo('home')}>Home</div>
                <div className="itemHover" style={styles.navItem} onClick={()=>this._navigateTo('about')}>About</div>
            </div>
        );
    }
}

const styles = {
    mainContainer: {
        overflow: 'hidden',
        padding: '25px 10px 30px 10px',
        borderBottom: '1px solid #ddd'
    },
    iconMain: {
        float: 'left', width: '40%', textAlign: 'center'
    },
    nameMain: {
        float: 'left', width: '60%', paddingTop: '5px',
    },
    name: {
        fontWeight: 'bold'
    },
    designation: {
        fontSize: '14px',
        color: '#a0a0a0',
        paddingTop: '5px'
    },
    navItem: {
        padding: '18px 0 18px 20px',
    },
    icon: {
        width: '50px',
        height: '50px',
        background: '#d8dee6',
        margin: '0px auto',
        borderRadius: '50px',
        border: '1px solid #cdd1d8',
    }
}
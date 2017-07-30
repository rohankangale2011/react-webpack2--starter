import React from 'react';
import ReactDOM from 'react-dom';

export default class AppComponent extends React.Component {
    render() {
        return (
            <div>M in main App component 123</div>
        );
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('mainapp'));
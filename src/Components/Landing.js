import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Landing extends Component {
    render() {
        return (
            <div>
                <p>Landing</p>
            </div>
        );
    }
}

export default withRouter(Landing);

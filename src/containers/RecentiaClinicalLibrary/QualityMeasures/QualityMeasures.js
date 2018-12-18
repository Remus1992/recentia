import React, {Component} from 'react';

import axios from '../../../axios-recentia';

import session_id from '../../../secret';
import license from '../../../secret2';

// import classes from './Dictionary.css'

class QualityMeasures extends Component {
    state = {
        definitions: null
    };

    componentDidMount () {
        console.log( this.props );
        axios.get( '/getPhysicians.php?SessionID=' + session_id + '&License=' + license )
            .then( response => {
                const definitions = response.data;
                this.setState( { definitions: definitions } );
                console.log( response );
            } )
            .catch( error => {
                console.log( error );
                // this.setState({error: true});
            } );
    }

    render() {
        return (
            <React.Fragment>
                <div>Quality Measures</div>
            </React.Fragment>
        );
    }
}

export default QualityMeasures;
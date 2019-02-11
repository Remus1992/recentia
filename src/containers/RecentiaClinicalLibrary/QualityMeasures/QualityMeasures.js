import React, {Component} from 'react';
import {Button, Icon} from 'react-materialize'

import axios from '../../../axios-recentia';

import session_id from '../../../secret';
import license from '../../../secret2';
// import classes from "../Translate/Translate.css";
// import classesMaterialize from "../../../materialize/css/materialize.css"

// import classes from './Dictionary.css'

class QualityMeasures extends Component {
    state = {
        definitions: null
    };

    componentDidMount() {
        console.log(this.props);
        axios.get('/getPhysicians.php?SessionID=' + session_id + '&License=' + license)
            .then(response => {
                const definitions = response.data;
                this.setState({definitions: definitions});
                console.log(response);
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    render() {
        return (
            <React.Fragment>
                <div>Quality Measures</div>
                {/*<a className="waves-effect waves-light btn">button</a>*/}
                {/*<a className={[classesMaterialize['waves-effect'], classesMaterialize["waves-light"], classesMaterialize.btn].join(' ')}>button</a>*/}
                <Button waves='light'>
                    <Icon>thumb_up</Icon>
                </Button>
            </React.Fragment>
        );
    }
}

export default QualityMeasures;
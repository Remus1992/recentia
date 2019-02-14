import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

// import classes from "../QualityMeasures/QualityMeasures";

class QualityMeasures extends Component {
    state = {
        definitions: null
    };

    render() {
        return (
            <React.Fragment>
                <div>Quality Measures</div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </React.Fragment>
        );
    }
}

export default QualityMeasures;
import React, {Component} from 'react';

// import classes from "../QualityMeasures/QualityMeasures";

class QualityMeasures extends Component {
    state = {
        definitions: null
    };

    render() {
        return (
            <React.Fragment>
                <div>Quality Measures</div>
                {/*<a className="waves-effect waves-light btn">button</a>*/}
                {/*<a className={[classesMaterialize['waves-effect'], classesMaterialize["waves-light"], classesMaterialize.btn].join(' ')}>button</a>*/}
            </React.Fragment>
        );
    }
}

export default QualityMeasures;
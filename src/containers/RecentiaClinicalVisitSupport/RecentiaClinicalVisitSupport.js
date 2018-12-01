import React, {Component} from 'react';

import Header from '../../components/Header/Header'

class recentiaClinicalLibrary extends Component {

    render() {
        return (
            <Header
                header_title="Recentia Clinical Visit Support"
                link1_title="Home"
                link1="/"
                link2_title="Clinical Library"
                link2="/clinical_library"/>
        );
    }
}

export default recentiaClinicalLibrary;
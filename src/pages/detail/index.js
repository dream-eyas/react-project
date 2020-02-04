import React, {PureComponent} from 'react';
import {connect} from 'react-redux';


class Detail extends PureComponent {
    render() {
        return (
            <div>detail</div>
        );
    }
}

export default connect(null, null)(Detail);
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import './index.scss';

class FilterItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className='color'>
                {
                    this.props.filterItem.map(item => {
                        return item
                    })
                }
            </div>
        )
    }
}

FilterItem.defaultProps = {};
FilterItem.propTypes = {};

const mapState = (state) => {
    let getData = (param) => {
        return state.getIn(['filterItem', param])
    };
    return {
        filterItem: getData('filterItem')
    };
};

const mapDispatch = (dispatch) => ({

});

export default connect(mapState, mapDispatch)(FilterItem);
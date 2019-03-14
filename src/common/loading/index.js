import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './loading.scss';

class Loading extends PureComponent {
    render() {
        return (
            <div>
                {
                    this.props.loading ? (
                        <div className='globalLoading'>
                            <img src="https://static.leke.cn/images/common/blank/loading-pc.gif" alt="loading"/>
                        </div>
                    ) : null
                }
            </div>
        );
    }
}
Loading.propTypes = {
    loading:PropTypes.bool
};
Loading.defaultProps = {
    loading: true
};
export default Loading;

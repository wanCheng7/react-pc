import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Writer from './components/Writer';
import { actionCreators } from './store';
import Loading from 'common/loading';
import FilterItem from 'component/filterItem';


import { 
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';

class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state={
			loading: true
		}
	}

	render() {
		return (
			<HomeWrapper>
				<Loading loading={this.state.loading}/>
				<HomeLeft>
					<List />
				</HomeLeft>
				<HomeRight>
					<FilterItem/>
					<Writer />
				</HomeRight>
			</HomeWrapper>
		)
	}

	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
		setTimeout(() => {
			this.setState({
				loading: false
			})
		}, 1000)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}

	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollTopShow);
	}

}

const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default connect(mapState, mapDispatch)(Home);

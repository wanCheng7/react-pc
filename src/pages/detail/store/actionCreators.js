import http from '$http';
import * as constants from './constants';
const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
});

export const getDetail = (id) => {
	return (dispatch) => {
		http.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data;
			dispatch(changeDetail(result.title, result.content));
		}).catch(() => {
			
		})
	}
};
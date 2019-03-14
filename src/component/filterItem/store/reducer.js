import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    filterItem: ['a', 'b', 'c']
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.filterItem:
            state.filterItem = [];
            return state;
        default:
            return state;
    }
}
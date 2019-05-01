import { IMAGES } from '../constants';

const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            console.log('dispatched in pageReducer');
            return state + 1;
        default:
            return state;
    }
};
export default pageReducer;

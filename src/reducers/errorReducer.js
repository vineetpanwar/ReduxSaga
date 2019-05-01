import { IMAGES } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return true;
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCESS:
            return false;
        default:
            return state;
    }
};
export default errorReducer;

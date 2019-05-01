import { IMAGES } from '../constants';

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            console.log('dispatched in loadingReducer');
            return true;
        case IMAGES.LOAD_FAIL:
        case IMAGES.LOAD_SUCCESS:
            return false;
        default:
            return state;
    }
};
export default loadingReducer;

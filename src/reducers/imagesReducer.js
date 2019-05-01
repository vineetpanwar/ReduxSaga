import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        console.log('dispatched in imagesReducer');
        console.log([...state, ...action.images]);
        return [...state, ...action.images];
    }
    return state;
};

export default imagesReducer;

import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api';
import { setImages, setError } from '../actions';

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (e) {
        //dipatch the error action
        yield put(setError(e.toString()));
    }
}
export const getPage = state => state.nextPage;

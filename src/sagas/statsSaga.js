import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImagesStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
    //loop to try for 3 times
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImagesStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (e) {}
    }
    yield put(setImageStatsError(id));
}
function* watchStatsRequest() {
    //infite loop
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        //we cant use fork with forEach loop
        for (var x of images) {
            yield fork(handleStatsRequest, x.id);
        }
    }
}

export default watchStatsRequest;

import { take, call, put } from 'redux-saga/effects';

import { FETCH_TEAMS_LIST, SAVE_TEAMS_LIST } from '../Actions/App/types';
import * as Api from '../../Api';

function* fetchTeams() {
    try {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        // const res = yield call(Api.getTeamsRequest);
        // yield put({ type: SAVE_TEAMS_LIST, teamsList: res.data });
        // console.log(res.data.data);

    }
    catch (error) {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
    }
};

export function* watchFetchTeamsList() {
    while (true) {
        yield take(FETCH_TEAMS_LIST);
        yield call(fetchTeams);
    }
};
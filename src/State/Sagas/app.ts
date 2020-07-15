import { take, call, put } from 'redux-saga/effects';

import { FETCH_TEAMS_LIST, SAVE_TEAMS_LIST, FETCH_PLAYERS_LIST, SAVE_PLAYERS_LIST } from '../Actions/App/types';
import * as Api from '../../Api';

function* fetchTeams() {
    try {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        // const res = yield call(Api.getTeamsRequest);
        // yield put({ type: SAVE_TEAMS_LIST, teamsList: res.data });
    }
    catch (error) {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
        console.log(error.message);
    }
};

export function* watchFetchTeamsList() {
    while (true) {
        yield take(FETCH_TEAMS_LIST);
        yield call(fetchTeams);
    }
};


function* fetchPlayers(teamID: number) {
    try {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        // const res = yield call(Api.getPlayersRequest, teamID);
        // yield put({ type: SAVE_PLAYERS_LIST, playersList: res.data });
    }
    catch (error) {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
        console.log(error.message);
    }
};

export function* watchFetchPlayersList() {
    while (true) {
        const { teamID } = yield take(FETCH_PLAYERS_LIST);        
        yield call(fetchPlayers, teamID);
    }
};
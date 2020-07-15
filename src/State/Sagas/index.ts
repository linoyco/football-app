import { all } from 'redux-saga/effects';

import { watchFetchTeamsList } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchTeamsList(),
	]);
}
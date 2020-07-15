import { all } from 'redux-saga/effects';

import { watchFetchTeamsList, watchFetchPlayersList } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchTeamsList(),
		watchFetchPlayersList()
	]);
}
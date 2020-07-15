import * as AppActions from './types';

export function fetchTeamsList(): AppActions.IFetchTeamsList {
    return {
        type: AppActions.FETCH_TEAMS_LIST
    }
}
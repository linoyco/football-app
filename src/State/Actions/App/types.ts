import * as ApiObjects from '../../../Api/ApiObjects';

export const FETCH_TEAMS_LIST = 'FETCH_TEAMS_LIST';
export const SAVE_TEAMS_LIST = 'SAVE_TEAMS_LIST';

export interface IFetchTeamsList {
    type: typeof FETCH_TEAMS_LIST;
}

export interface ISaveTeamsList {
    type: typeof SAVE_TEAMS_LIST;
    teamsList: ApiObjects.ITeamsList;
}

export type appActionType = IFetchTeamsList
    | ISaveTeamsList;

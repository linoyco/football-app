import * as ApiObjects from '../../../Api/ApiObjects';

export const FETCH_TEAMS_LIST = 'FETCH_TEAMS_LIST';
export const SAVE_TEAMS_LIST = 'SAVE_TEAMS_LIST';
export const FETCH_PLAYERS_LIST = 'FETCH_PLAYERS_LIST';
export const SAVE_PLAYERS_LIST = 'SAVE_PLAYERS_LIST';
export const SAVE_CURRENT_TEAM = 'SAVE_CURRENT_TEAM';

export interface IFetchTeamsList {
    type: typeof FETCH_TEAMS_LIST;
}

export interface ISaveTeamsList {
    type: typeof SAVE_TEAMS_LIST;
    teamsList: ApiObjects.ITeamsList;
}

export interface IFetchPlayersList {
    type: typeof FETCH_PLAYERS_LIST;
    teamID: number;
}

export interface ISavePlayersList {
    type: typeof SAVE_PLAYERS_LIST;
    playersList: ApiObjects.IPlayersList;
}

export interface ISaveCurrentTeam {
    type: typeof SAVE_CURRENT_TEAM;
    currentTeam: ApiObjects.ITeamDetails;
}

export type appActionType = IFetchTeamsList
    | ISaveTeamsList
    | IFetchPlayersList
    | ISavePlayersList
    | ISaveCurrentTeam;

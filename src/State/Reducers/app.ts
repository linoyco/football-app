import produce from 'immer';

import * as ApiObjects from '../../Api/ApiObjects';
import { appActionType, SAVE_TEAMS_LIST } from '../Actions/App/types';

export interface IAppState {
    teamsList: ApiObjects.ITeamsList;
}

const initialState: IAppState = {
    teamsList: {
        data: [],
        pagination: {
            hasNextPage: false,
            hasPrevPage: false,
            itemsPerPage: 0,
            page: 0
        }
    }
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_TEAMS_LIST:
                draft.teamsList = action.teamsList;
                break;

        }
    });
}
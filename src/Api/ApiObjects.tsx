// 1) Get teams by season
//  https://elenasport-io1.p.rapidapi.com/v2/seasons/3/teams
// Header
// x-rapidapi-key a33b96587bmsh894383a0a6111b1p1ba58ejsn32236735484f
export interface ITeamDetails {
    id: number,
    name: string,
    fullName: string,
    country: string,
    founded: string,
    officialPage: string,
    phone: string,
    email: string,
    address: string,
    badgeURL: string
}

export interface ITeamsList {
    data: Array<ITeamDetails>;
    pagination: {
        page: number,
        itemsPerPage: number,
        hasNextPage: boolean,
        hasPrevPage: boolean
    }
}

// 2) Get players by season and teamID
//  https://elenasport-io1.p.rapidapi.com/v2/seasons/3/players?idTeam=16
// Header
// x-rapidapi-key a33b96587bmsh894383a0a6111b1p1ba58ejsn32236735484f
// Param
// idTeam = number
export interface IPlayerDetails {
    id: number,
    name: string,
    nationalities: Array<string>,
    fullName: string,
    pob: string,
    dob: string,
    height: number,
    weight: number,
    foot: string,
    photoURL: string
}

export interface IPlayersList {
    data: Array<IPlayerDetails>;
    pagination: {
        page: number,
        itemsPerPage: number,
        hasNextPage: boolean,
        hasPrevPage: boolean
    }
}

// 3) Get player by name
// https://apiv2.apifootball.com/
// Param
// action = get_players
// player_name = ronaldo cristiano
// APIkey = 7ee04ff8724924388242d90eb70deb42d4b1a7e846336b489a58781063f095fb
export interface IPlayerNumber {
    player_key: number,
    player_name: string,
    player_number: string,
    player_country: string,
    player_type: string,
    player_age: string,
    player_match_played: string,
    player_goals: string,
    player_yellow_cards: string,
    player_red_cards: string,
    team_name: string,
    team_key: string
}

export interface IPlayerNumberList {
    data: Array<IPlayerNumber>;
}
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import * as ApiObjects from '../Api/ApiObjects';
import PlayerCard from '../Components/PlayerCard';
import { Avatar, Box } from '@material-ui/core';

const StyledAppDiv: any = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
`;

const StyledCardsDiv: any = styled(Box)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 90%
    overflow: auto;
`;

const OneTeamDetails: React.FunctionComponent = () => {

    const localPlayersList: ApiObjects.IPlayerDetails[] = useSelector((state: any) => state.app.playersList.data);
    const currentTeam: ApiObjects.ITeamDetails = useSelector((state: any) => state.app.currentTeam);

    const mapListToCards = () => {
        if (localPlayersList.length === 0) return <div></div>;
        return localPlayersList.map(player =>
            <PlayerCard
                key={player.id}
                imageUrl={player.photoURL}
                fullName={player.fullName}
                playerNumber={'2'}
            />
        );
    }

    return (
        <StyledAppDiv>
            <h1><Avatar alt={currentTeam.fullName} src={currentTeam.badgeURL} />{currentTeam.name} </h1>
            <h4>Founded at: {currentTeam.founded}</h4>
            <h4>Address: {currentTeam.address}</h4>
            <a href={currentTeam.officialPage} target="_blank">Website Page</a>
            <StyledCardsDiv>
                {mapListToCards()}
            </StyledCardsDiv>
        </StyledAppDiv>
    );
}

export default OneTeamDetails;

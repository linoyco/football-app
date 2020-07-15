import React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import * as ApiObjects from '../Api/ApiObjects';
import PlayerCard from '../Components/PlayerCard';
import { Avatar } from '@material-ui/core';
import { fetchPlayerNumber } from '../State/Actions/App';
import { IPlayersCardList } from '../State/Reducers/app';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';


const StyledAppDiv: any = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;
`;

const StyledCardsDiv: any = styled.div`
    display: flex;
    justify-content: space-around;
    height: 55%;
    width: 90%
    overflow: visible;
    border: 2px solid red;
    margin-top: 1%;
`;

const OneTeamDetails: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const localPlayersList: ApiObjects.IPlayerDetails[] = useSelector((state: any) => state.app.playersList.data);
    const currentTeam: ApiObjects.ITeamDetails = useSelector((state: any) => state.app.currentTeam);
    const localPlayersCardList: IPlayersCardList[] = useSelector((state: any) => state.app.playersCardList);

    React.useEffect(() => {
        if (localPlayersList.length > 0)
            dispatch(fetchPlayerNumber(localPlayersList));
    }, [localPlayersList]);

    const mapListToCards = () => {
        if (localPlayersCardList.length === 0) return <div></div>;
        return localPlayersCardList.map(player =>
            <PlayerCard
                key={player.id}
                imageUrl={player.imageUrl}
                fullName={player.fullName}
                playerNumber={player.playerNumber}
                id={player.id}
            />
        );
    }

    const tileData = [
        { img: 'ggg', title: 'linoy', author: 'lajla' },
        { img: 'gggg', title: 'linoy', author: 'dghlala' },
        { img: 'yeu', title: 'linoy', author: 'lala' },
        { img: 'ggg', title: 'gdfg', author: 'lala' },
        { img: 'ggg', title: 'linoy', author: 'lahjla' },
        { img: 'wer', title: 'linoy', author: 'lala' },
        { img: 'ggfg', title: 'linoy', author: 'lyala' },
        { img: 'ggg', title: 'twert', author: 'lala' },
        { img: 'dgh', title: 'linoy', author: 'lala' },
        { img: 'ggg', title: 'fdg', author: 'lalga' },
        { img: 'ggdg', title: 'linoy', author: 'lala' },
    ]

    return (
        <StyledAppDiv>
            <h1><Avatar alt={currentTeam.fullName} src={currentTeam.badgeURL} />{currentTeam.name} </h1>
            <h4>Founded at: {currentTeam.founded}</h4>
            <h4>Address: {currentTeam.address}</h4>
            <a href={currentTeam.officialPage} target="_blank">Website Page</a>
            {/* <StyledCardsDiv >
                {mapListToCards()}
            </StyledCardsDiv> */}
            <div>
                <GridList cellHeight={'auto'} >
                    <GridListTile cols={2} style={{ height: 'auto' }}>
                    </GridListTile>

                    {tileData.map((tile) => (
                        <GridListTile key={tile.img} style={{ border: '2px solid #6CCF83', width: '12%', borderRadius: '10px', margin: '1%' }}>
                            <h3>linoy</h3>
                            <img src={tile.img} alt={tile.title} />
                            <h5>5</h5>
                        </GridListTile>
                    ))}

                </GridList>
            </div>
        </StyledAppDiv>
    );
}

export default OneTeamDetails;

import React from 'react';
import { Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';
import { IPlayersCardList } from '../State/Reducers/app';

const PlayerCard: React.FunctionComponent<IPlayersCardList> = ({ playerNumber, fullName, imageUrl, id }) => (
    <Card style={{ height: '100%', width: '15%' }}>
        <CardHeader
            title={
                <Typography style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    {fullName}
                </Typography>
            }
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        />
        <Avatar alt={imageUrl} src={imageUrl} />
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>
                {playerNumber}
            </Typography>
        </CardContent>
    </Card>
);

export default PlayerCard;
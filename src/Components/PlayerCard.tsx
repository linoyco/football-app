import React from 'react';
import { CardMedia, Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';

interface IProps {
    playerNumber?: string;
    fullName?: string;
    imageUrl: string;
}

const PlayerCard: React.FunctionComponent<IProps> = ({ playerNumber, fullName, imageUrl }) => (
    <Card style={{ height: '70%', width: '15%' }}>
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
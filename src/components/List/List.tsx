import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {Song, ArtistType} from '../../modules/types';

export default function ArtistList({artistList}: { artistList: ArtistType | undefined }) {
    return (
        <>
            <List sx={{width: '100%', maxWidth: 700, bgcolor: 'background.paper'}}>
                {(artistList && artistList.results.length > 0) ? artistList.results.map((song: Song, index: number) => {
                    return (
                        <>
                            <ListItem key={index} alignItems="flex-start" style={{height: 150}}>
                                <ListItemAvatar>
                                    <Avatar alt={song.artistName} src={song.artworkUrl60}/>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={song.artistName}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{display: 'inline'}}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {song.collectionName}
                                            </Typography>
                                            {" - " + song.trackName}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li"/>
                        </>
                    )
                }) : <span>no result</span>
                }
            </List>
        </>
    );
}

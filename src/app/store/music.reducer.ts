import { Action } from '@ngrx/store';
import * as MusicListActions from './music.actions';

const initialState = {
    songs: [
        {
            artist: 'Eminem',
            name: 'Rap God',
            duration: 200,
            album: 'Rap God'
        },
        {
            artist: '50 Cent',
            name: 'Candy shop',
            duration: 250,
            album: '50cent'
        }
    ]
};

export function MusicListReducer(state = initialState, action: MusicListActions.MusicListActions) {
    switch(action.type) {
        case MusicListActions.ADD_SONG:
            return {
                ...state,
                songs: [...state.songs, action.payload]
            };
        case MusicListActions.DELETE_SONG:
            return{
                ...state,
                songs: state.songs.filter((song, songIndex) => {
                    return songIndex !== action.payload;
                } )
            };
        default:
            return state;
    }

}
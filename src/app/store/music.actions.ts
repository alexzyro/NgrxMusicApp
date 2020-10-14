import { Action } from '@ngrx/store';
import { Song } from '../music-list/song.model';

export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';

export class AddSong implements Action {
    readonly type = ADD_SONG;

    constructor(public payload: Song) {}
}

export class DeleteSong implements Action {
    readonly type = DELETE_SONG;

    constructor(public payload: number) {}
}

export type MusicListActions = AddSong | DeleteSong;
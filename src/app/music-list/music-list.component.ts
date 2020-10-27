import { Component, OnInit } from '@angular/core';
import { Song } from './song.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MusicListActions from '../store/music.actions';
import { MusicListReducer } from '../store/music.reducer';


@Component({
    selector: 'music-list',
    templateUrl: './music-list.component.html',
    styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
    public musicList: Observable<{ songs: Song[] }>;
    public song: Song;

    name: string;
    artist: string;
    duration: number;
    album: string;

    constructor(
        public dialog: MatDialog,
        public store: Store<{ musicList: {songs: Song[]} }>
    ) {}

    ngOnInit() {
        this.musicList = this.store.select('musicList');
    }

    openDialog(): void {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = '260px'
        dialogConfig.data = {
            song: {
                artist: this.artist,
                name: this.name,
                duration: this.duration,
                album: this.album
            }
        };
        
        const dialogRef = this.dialog.open(DialogModalComponent, dialogConfig);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.addSong(result);
            } else {
                this.song = result;
            }
        });
    }
    
    addSong(songAdded: Song) {
        // this.musicList.push(songAdded);
        this.store.dispatch(new MusicListActions.AddSong(songAdded));
    }

    deleteSong(song: number){
        this.store.dispatch(new MusicListActions.DeleteSong(song));
        // const delElem = this.musicList.indexOf(song);
        // this.musicList.splice(delElem, 1);
    }

    //new updates

}
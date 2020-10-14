import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Song } from '../music-list/song.model';

@Component({
  selector: 'dialog-modal',
  templateUrl: 'dialog-modal.component.html',
})
export class DialogModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Song) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
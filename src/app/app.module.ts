import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MusicListComponent } from './music-list/music-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { DemoMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MusicListReducer } from './store/music.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MusicListComponent,
    DialogModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    MatDialogModule,
    StoreModule.forRoot({musicList: MusicListReducer})
  ],
  entryComponents: [MusicListComponent, DialogModalComponent],
  bootstrap: [AppComponent, MusicListComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }

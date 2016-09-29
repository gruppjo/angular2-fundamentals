import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';
import { ColorPicker } from './color-picker';

@Component({
  selector: 'note-creator',
  directives: [
    ColorPicker
  ],
  styles: [`
    .note-creator {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
    }
    .title {
      font-weight: bold;
      color: rgba(0,0,0,0.8);
    }
  `],
  template: `
  <div class="note-creator shadow-2"
    [ngStyle]="{'background-color': newNote.color}">
    <form
      class="row"
      (submit)="onCreateNote()"
      (focusOut)="toggleFull()"
    >
      <!-- <pre>{{ newNote | json }}</pre> -->
      <input
        class="col-xs-10 title"
        type="text"
        name="newNoteTitle"
        placeholder="Title"
        [(ngModel)]="newNote.title"
        *ngIf="fullForm"
      >
      <input
        class="col-xs-10"
        type="text"
        name="newNoteValue"
        placeholder="Take a note..."
        [(ngModel)]="newNote.value"
        (focus)="toggleFull()"
      >
      <div
        class="actions col-xs-12 row between-xs"
        *ngIf="fullForm"
      >
        <div class="col-xs-3">
          <color-picker
            [colors]="colors"
            (selected)="selectColor($event)"
          ></color-picker>
        </div>
        <button
          type="submit"
          class="btn-light"
         >
          Done
        </button>
      </div>
    </form>
  </div>
  `
})

export class NoteCreator {
  @Output() createNote = new EventEmitter();
  newNote = {
    title: '',
    value: '',
    color: 'white'
  }
  fullForm: boolean = false;
  colors: string[] = ['#b19cd9', '#ff9691', '#77dd77', '#aec6cf', '#f49ac2', 'white'];
  toggleFull() {
    this.fullForm = !this.fullForm;
  }
  onCreateNote() {
    const { title, value, color } = this.newNote;

    if (title && value) {
      this.createNote.next({title, value, color});
      this.reset();
      this.toggleFull();
    }
  }
  reset() {
    this.newNote = {
      title: '',
      value: '',
      color: 'white'
    }
  }
  selectColor(color) {
    this.newNote.color = color;
  }
}

import {
  Component,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'note-creator',
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
  <div class="note-creator shadow-2">
    <form
      class="row"
      (submit)="onCreateNote()"
    >
      <!-- <pre>{{ newNote | json }}</pre> -->
      <input
        type="text"
        name="newNoteTitle"
        [(ngModel)]="newNote.title"
        placeholder="Title"
        class="col-xs-10 title"
      >
      <input
        type="text"
        name="newNoteValue"
        [(ngModel)]="newNote.value"
        placeholder="Take a note..."
        class="col-xs-10"
      >
      <div class="actions col-xs-12 row between-xs">
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
    value: ''
  }
  onCreateNote() {
    const { title, value } = this.newNote;

    if (title && value) {
      this.createNote.next({title, value});
      this.reset();
    }
  }
  reset() {
    this.newNote = {
      title: '',
      value: ''
    }
  }
}

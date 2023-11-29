//Responsible to creating todo items
const myTodos = [];
class Todo {
  constructor(title, description, dueDate, priority, note = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
  }

  addNote(note) {
    this.note.push(note);
  }
}

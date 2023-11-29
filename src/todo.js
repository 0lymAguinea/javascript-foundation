class createTodo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    note = [],
    checkList = []
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.note = note;
    this.checkList = checkList;
  }

  addNote(note) {
    this.note.push(note);
  }

  addItemToCheckList(checklist) {
    this.checkList.push(checklist);
  }
}

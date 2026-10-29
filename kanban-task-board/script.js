// FlowBoard — starter project. Implement the TODOs step by step.
let tasks = [];
let nextId = 1;
let editingTaskId = null;
let defaultStatus = "todo";

// TODO 1: Select all required elements by their IDs and classes.
// TODO 2: Create showTaskForm(status) and hideTaskForm().
// Wire the main Add task button and each column's + button.
// Save defaultStatus so new tasks enter the correct column.
// TODO 3: Handle form submit. Validate title, then create/update a task:
// { id, title, description, priority, dueDate, status }.
// If editingTaskId is set, update the existing task instead of creating a new one.
// TODO 4: Write renderBoard() to render tasks into the correct list.
// Show title, description, priority, due date, status dropdown, edit and delete buttons.
// Update todoCount, doingCount and doneCount; show an empty message for blank columns.
// Use data-id attributes to identify the task for each action.
// TODO 5: Handle status dropdown changes to move tasks between columns.
// TODO 6: Implement edit and delete buttons.
// TODO 7 (bonus): Save/load tasks using localStorage and JSON.stringify/JSON.parse.
// TODO 8 (bonus): Toggle dark mode with body.classList.toggle("dark"); save theme choice.
// TODO 9 (bonus): Add drag-and-drop to move cards between columns.
// Suggested order: selectors → show/hide form → add task → render board → move/delete → storage.

# Notes App
A simple Notes application built with React and Ant Design.

#Features
Add, delete, save and search notes.
Pagination to navigate through notes.
Save notes to localStorage.

# Installation

1. Clone the repository :
    git clone https://github.com/your-username/notes-app.git
 
2. Navigate to the project directory :
    cd notes-app
   
4. Install dependencies :
    npm install

5. start the development server :
    npm start


#Components

1.App.js :
The main component that holds the state of the application and renders the Header, SearchBar, NoteList, and the "Clear All Notes" button.

2.Header.js :
A simple header component displaying the logo and the application title.

3.SearchBar.js :
A component with a search input field to filter notes. Utilizes Ant Design's Input.Search component.

4.NoteList.js :
Renders a list of notes and includes pagination. It also includes the AddNewNote component.

5.Note.js :
A single note component that displays the note text and a delete button.

6.AddNewNote.js :
A component with a textarea to add a new note. Uses useCallback for event handlers


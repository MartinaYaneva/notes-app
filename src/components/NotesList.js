import React, { useState } from "react";
import Note from "./Note";
import AddNewNote from "./AddNewNote";
import { Pagination } from "antd";

const notesPerPage = 2;

export default function NoteList({ notes, handleAddNewNote, handleDeleteNote }) {

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * notesPerPage;
    const currentNotes = notes.slice(startIndex, startIndex + notesPerPage);

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="notes-list">
                {currentNotes.map((note) =>
                    <Note
                        key={note.id}
                        id={note.id}
                        text={note.text}
                        handleDeleteNote={handleDeleteNote}
                    />
                )}
                <AddNewNote handleAddNewNote={handleAddNewNote} />  
            </div>
            <div>
                <Pagination
                    current={currentPage}
                    total={notes.length}
                    pageSize={notesPerPage}
                    onChange={onPageChange}
                    style={{ marginTop: '10px', textAlign: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-end', justifyContent: 'flex-start' }}
                />
            </div>
        </>
    );
}



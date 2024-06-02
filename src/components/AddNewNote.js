import { useState, useCallback } from "react"
import { Button } from 'antd';


export default function AddNewNote({ handleAddNewNote }) {
    const [noteText, setNoteText] = useState('')

    const handleChange = useCallback((event) => {
        setNoteText(event.target.value);
    }, []);

    const handleSave = useCallback(() => {
        if (noteText.trim().length > 0) {
            handleAddNewNote(noteText);
            setNoteText('');
        }
    }, [noteText, handleAddNewNote]);

    return (
        <div className="single-note new">
            <textarea rows='8'
                cols='10'
                placeholder="type to add note..."
                value={noteText}
                onChange={handleChange}>
            </textarea>
           
            <div className="note-footer">
                <Button type='primary'
                    onClick={handleSave}>
                    Save
                </Button>
            </div>
            </div>
            

    )
}
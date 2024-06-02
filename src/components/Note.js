import { Button } from 'antd'

export default function Note({ id, text, handleDeleteNote }) {
    return (
        <div className="single-note">
            <span>{text}</span>
            <div className='note-footer'>
                <Button type='primary'
                    onClick={() => handleDeleteNote(id)}>
                    Delete
                </Button>
            </div>
        </div>
    )
}



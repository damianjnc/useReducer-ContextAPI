import React from 'react'
import Note from "./Note";
import NoteContext from '../contexts/note-context'

const NoteList = () => {
    return (
        <NoteContext>{(context) =>(
            context.mySavedNotes.map((note) => (
            <Note key={note.title} note={note} removeNote={context.removeNoteHandler}/>
            )))}
        </NoteContext>
    )
}

export {NoteList as default}
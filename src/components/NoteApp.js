import React, {useState, useEffect, useReducer} from 'react';
import notesReducer from "../reducers/notes";
import NoteList from './NoteList'
import NoteContext from '../contexts/note-context'
import AddNoteContext from '../contexts/AddNoteContext'
import AddNoteForm from './AddNoteForm'

const NoteApp = () => {
    const [notes, dispatch] = useReducer(notesReducer, [])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('')
        setBody('')
    }

    const removeNote = (title) => {
        dispatch({
            type: 'REMOVE_NOTE',
            title
        })
    }

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))

        if (notes) {
            dispatch({type: 'POPULATE_NOTES', notes})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <div>
            <h1>Notes</h1>
            <NoteContext.Provider value={{mySavedNotes: notes, removeNoteHandler: removeNote}}>
                <NoteList/>
            </NoteContext.Provider>
            <p>Add note</p>
            <AddNoteContext.Provider value={{addNote, title, setTitle, body, setBody}}>
                <AddNoteForm/>
            </AddNoteContext.Provider>
        </div>
    )
}

export default NoteApp;
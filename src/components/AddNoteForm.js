import React from 'react';
import AddNoteContext from '../contexts/AddNoteContext'

const AddNoteForm = () => {
    return (
        <AddNoteContext.Consumer>
            {(context) =>(
                <form onSubmit={context.addNote}>
                    <input value={context.title} onChange={(e) => context.setTitle(e.target.value)}/>
                    <textarea value={context.body} onChange={(e) => context.setBody(e.target.value)}></textarea>
                    <button>add note</button>
                </form>
            )}
        </AddNoteContext.Consumer>

    );
};

export default AddNoteForm;
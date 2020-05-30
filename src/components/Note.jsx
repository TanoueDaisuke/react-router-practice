import React from 'react'

const Note = ({ note }) => {
  return (
    <div>
      <h2>{note.content}</h2>
      <p>{note.user}</p>
      <p><strong>{note.important ? 'important' : ''}</strong></p>
    </div>
  )
}

export default Note
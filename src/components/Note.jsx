import React from 'react'
import { useParams } from 'react-router-dom'

const Note = ({ notes }) => {
  const id = useParams().id
  const note = notes.find(n => n.id === Number(id))
  return (
    <div>
      <h2>{note.content}</h2>
      <p>{note.user}</p>
      <p><strong>{note.important ? 'important' : ''}</strong></p>
    </div>
  )
}

export default Note
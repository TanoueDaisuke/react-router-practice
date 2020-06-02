import React from 'react'
import { Link } from 'react-router-dom'
import { 
  TableContainer, 
  Table, 
  TableBody,
  TableRow, 
  TableCell,
  Paper,
} from '@material-ui/core'

const Notes = ({ notes }) => {
  return (
    <div>
      <h2>Notes</h2>

      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {notes.map(note => 
              <TableRow key={note.id}>
                <TableCell>
                  <Link to={`/notes/${note.id}`}>{note.content}</Link>
                </TableCell>
                <TableCell>
                  {note.name}
                </TableCell>
              </TableRow>
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Notes
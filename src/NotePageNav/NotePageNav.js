import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
import ApiContext from '../ApiContext'
import { findNote, findFolder } from '../notes-helpers'
import './NotePageNav.css';
import PropTypes from 'prop-types';



export default class NotePageNav extends React.Component {
  // static defaultProps = {
  //   history: {
  //     goBack: () => { }
  //   },
  //   match: {
  //     params: {}
  //   }
  // }
  static contextType = ApiContext;

  render() {

    const { notes, folders, } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || {}
    const folder = findFolder(folders, note.folderId)
    return (
      <div className='NotePageNav'>
        <CircleButton
          tag='button'
          role='link'
          onClick={() => this.props.history.push('/add-folder')}
          className='NotePageNav__back-button'
          input={<FontAwesomeIcon icon='chevron-left' />}
        />
        {folder && (
          <h3 className='NotePageNav__folder-name'>
            {folder.name}
          </h3>
        )}
      </div>
    )
  }
}

NotePageNav.propTypes = {
  history: PropTypes.object
}
import React from 'react'
import './program.css'
import PageNote from '../pageNote.jsx/pageNote'

export default function Program() {
  return (
    <div className='program'>
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem', fontWeight: 'bold' }}>
        Announcement will be made soon.
      </div>
      <div style={{ display: 'none' }}>
        <PageNote />
      </div>
    </div>
  )
}

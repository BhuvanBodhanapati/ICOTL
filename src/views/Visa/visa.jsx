import React from 'react'
import PageNote from '../pageNote.jsx/pageNote'
import './visa.css'

export default function Visa() {
  return (
    <div className='visa'>
      <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '2rem', fontWeight: 'bold' }}>
        Announcement will be made soon.
      </div>
      <div style={{ display: 'none' }}>
        <PageNote />
      </div>
    </div>
  )
}

import React from 'react'

function Title({titleProp}) {
  return (
    <div className={'title-container '+ titleProp.classes}>
        <h2 className='title'>{titleProp.title}</h2>
    </div>
  )
}

export default Title
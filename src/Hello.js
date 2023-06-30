import React from 'react'

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color: color }}>
      { isSpecial && <b>*</b> }
      hiiii {name} 
    </div>
  )
}

Hello.defaultProps = {
  name: 'NoName'
}

export default Hello
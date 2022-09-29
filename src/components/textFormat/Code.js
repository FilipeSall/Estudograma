import React from 'react'

const Code = ({text}) => {

    const meSignal = '<';
    const maSignal = '>';

  return (
    <code>{meSignal}{text}{maSignal}</code>
  )
}

export default Code
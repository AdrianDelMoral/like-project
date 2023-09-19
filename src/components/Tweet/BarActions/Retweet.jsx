import { TfiReload } from 'react-icons/tfi'
import { useState } from 'react'

export function Retweet (initialIsRt, cantidadRt) {
  const [isRt, setIsRt] = useState(initialIsRt)

  const buttonClassName = isRt
    ? 'rt-colored is-Rt'
    : ''

  const handleClick = () => {
    setIsRt(!isRt)
  }

  return (
    <button className={buttonClassName} onClick={handleClick}>
      <div className='icon'>
        <TfiReload size={52} />
      </div>
    </button>
  )
}

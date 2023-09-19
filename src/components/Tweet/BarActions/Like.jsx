import { AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'

export function Like (initialIsMg, cantidadMg) {
  const [isMg, setIsMg] = useState(initialIsMg)

  const buttonClassName = isMg
    ? 'like-colored is-Mg'
    : 'like-colored'

  const handleClick = () => {
    setIsMg(!isMg)
  }

  console.log(isMg)
  console.log(buttonClassName)
  return (
    <button className={buttonClassName} onClick={handleClick}>
      <div className='icon'>
        <AiOutlineHeart size={52} />
      </div>
    </button>
  )
}

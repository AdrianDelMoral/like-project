import { AiOutlineHeart } from 'react-icons/ai'

export function LikeButton ({ isMg, handleLike }) {
  const buttonClassName = isMg
    ? 'like-colored is-Mg'
    : 'like-colored'

  return (
    <button className={buttonClassName} onClick={handleLike}>
      <div className='icon'>
        <AiOutlineHeart size={52} />
      </div>
    </button>
  )
}

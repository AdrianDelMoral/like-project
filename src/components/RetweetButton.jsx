import { TfiReload } from 'react-icons/tfi'

export function RetweetButton ({ isRt, handleRetweet }) {
  const buttonClassName = isRt
    ? 'rt-colored is-Rt'
    : ''

  return (
    <button className={buttonClassName} onClick={handleRetweet}>
      <div className='icon'>
        <TfiReload size={52} />
      </div>
    </button>
  )
}

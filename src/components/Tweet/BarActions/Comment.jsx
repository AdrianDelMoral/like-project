import { FaRegComment } from 'react-icons/fa';

export function Comment() {
    return (
        <button className="comment-colored">
            <div className='icon'>
                <FaRegComment size={52}/>
            </div>
        </button>
    )
}
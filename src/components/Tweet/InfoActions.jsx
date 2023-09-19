import '../../styles/infoActions.css'

export function InfoActions ({ initialIsMg = 0, initialIsRt = 0 }) {
  return (
    <>
      <span>
        {initialIsMg}
      </span>
      <span>
        {initialIsMg > 1 ? 'Me Gustas' : 'Me Gusta'}
      </span>

      <span>
        {initialIsRt}
      </span>

      <span>
        {initialIsRt > 1 ? 'Retweets' : 'Retweet'}
      </span>
    </>
  )
}

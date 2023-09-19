export function TweetInfo ({ mg, rt }) {
  return (
    <>
      <span>
        {rt}
      </span>
      <span>
        {rt > 1 ? 'Retweets' : 'Retweet'}
      </span>

      <span>
        {mg}
      </span>
      <span>
        {mg > 1 ? 'Me Gustas' : 'Me Gusta'}
      </span>
    </>
  )
}

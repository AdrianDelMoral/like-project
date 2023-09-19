import '../../styles/barActions.css'
import { Like } from './Tweet/BarActions/Like'
import { Comment } from './Tweet/BarActions/Comment'
import { Retweet } from './Tweet/BarActions/Retweet'
import { useTweets } from './TweetsContext'
import React from 'react'

import { InfoActions } from './Tweet/InfoActions'

export function Tweet () {
  const { tweets } = useTweets()

  /* viste como llego, a ese set lo cambias por u */

  // console.log(tweets)
  console.log(tweets)

  return (
    <>
      <img src='../public/luffy-pic.webp' alt='' width='500px' height='500px' />

      <article className='tw-infoActions'>
        {
                    tweets.map(({ uuid, cantidadMg, cantidadRt }) => (
                      <InfoActions key={uuid} initialIsMg={cantidadMg} initialIsRt={cantidadRt} />
                    ))
                }
      </article>

      <article className='tw-barActions'>
        <Comment />
        {
                    tweets.map(({ uuid, isRt, cantidadRt }) => (
                      <Retweet key={uuid} initialIsRt={isRt} cantidadRt={cantidadRt} />
                    ))
                }
        {
                    tweets.map(({ uuid, isMg, cantidadMg }) => (
                      <Like key={uuid} initialIsMg={isMg} cantidadMg={cantidadMg} />
                    ))
                }
      </article>
    </>
  )
}

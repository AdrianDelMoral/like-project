import '../styles/tweet.css'
import React, { useState } from 'react'
import { TweetInfo } from './TweetInfo'
import { CommentButton } from './CommentButton'
import { RetweetButton } from './RetweetButton'
import { LikeButton } from './LikeButton'

export function Tweet () {
  const [tweet, setTweet] = useState({
    favorites: 12,
    retweets: 2,
    comments: 10,
    isFav: true,
    isRt: false
  })

  const handleLike = () => {
    if (tweet.isFav) {
      // if already liked, then remove one like
      setTweet({
        ...tweet,
        favorites: tweet.favorites - 1,
        isFav: false
      })
    } else {
      // if not liked, then add one like
      setTweet({
        ...tweet,
        favorites: tweet.favorites + 1,
        isFav: true
      })
    }
  }

  const handleRetweet = () => {
    if (tweet.isRt) {
      // if already retweeted, then remove one retweet
      setTweet({
        ...tweet,
        retweets: tweet.retweets - 1,
        isRt: false
      })
    } else {
      // if not retweeted, then add one retweet
      setTweet({
        ...tweet,
        retweets: tweet.retweets + 1,
        isRt: true
      })
    }
  }

  return (
    <>
      <img src='../public/luffy-pic.webp' alt='' width='500px' height='500px' />

      <article className='tw-infoActions'>
        <TweetInfo mg={tweet.favorites} rt={tweet.retweets} />
      </article>

      <article className='tw-barActions'>
        <CommentButton />
        <RetweetButton isRt={tweet.isRt} handleRetweet={handleRetweet} />
        <LikeButton isMg={tweet.isFav} handleLike={handleLike} />
      </article>
    </>
  )
}

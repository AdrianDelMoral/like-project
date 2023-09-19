import React from 'react'

import './App.css'
import { Tweet } from './components/Tweet'
import { TweetsProvider } from './components/Tweet/TweetsContext'

export function App () {
  return (
    <section>
      <div className='App'>
        <TweetsProvider>
          <Tweet />
        </TweetsProvider>
      </div>
    </section>
  )
}

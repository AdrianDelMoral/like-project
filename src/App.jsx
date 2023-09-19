import React from 'react';

import './App.css';
import { BarActions } from './components/Tweet/BarActions'
import { TweetsProvider } from './components/Tweet/TweetsContext';

export function App() {
  return (
    <section>
        <img src="../public/luffy-pic.webp" alt="" width={"500px"} height={"500px"}/>
        <div className='App'>
          <TweetsProvider>
            <BarActions />
          </TweetsProvider>
        </div>
    </section>
  )
}
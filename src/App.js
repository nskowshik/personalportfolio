import React from 'react';
import { Intro, Toolbar, Footer, Careers } from './pages'
import './App.scss'

export default function App() {
  return(
    <>
      <div className="home">
        <Toolbar items={['Experience','Skill', 'Contact']} />
        <Intro />
        <Careers />
        <Footer />
      </div>
    </>
  )
}

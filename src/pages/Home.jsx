import React from 'react'
import Introduction from '../components/Introduction'
import AboutMe from '../components/AboutMe'
import Skills from '../components/Skills'
import ImageSection from '../components/ImageSection'
import WorkExperience from '../components/WorkExperience'
import Portfolio from '../components/Portfolio'

function Home() {
  return (
    <div>
      <Introduction />
      <AboutMe />
      <Skills />
      <ImageSection />
      <WorkExperience />
      <Portfolio />
    </div>
    
  )
}

export default Home
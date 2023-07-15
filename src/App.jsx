import {Navbar,Hero,Books,About, Nouveautes, NewsLetter,Footer} from './components'
function App() {

  return (
    <div>
      <div className='w-11/12 2xl:w-4/5 m-auto'>
        <Navbar/>
        <Hero/>
        <Books/>
      </div>
      
      <About/>
      <Nouveautes/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App

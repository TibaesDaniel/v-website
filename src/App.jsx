import './App.css'
import Header from './components/header/index';
import About from './components/about/index';
import WebsiteContent from './components/contentMontain/index';


function App() {
  return (
    <div className='App'>
      <Header/>
      <About/>

      <div className='gridImg content'>
        <div className='card img1'></div>
        <div className='card img2'></div>
        <div className='card img3'></div>
      </div>

      <WebsiteContent/>

      <div className='gridImg content'>
          <div className='card img4'></div>
          <div className='card img5'></div>
      </div>

    </div>
  )
}

export default App

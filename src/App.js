
import './App.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from './lotties/website-desig.json';
import Tabs from './components/tabs';
import Footer from './components/footer';
import Project from './components/project';
import Experience from './components/experience';
import About  from './components/about';
function App() {



  return (
    <>

      <div className="">
        <nav className="bg-#8c0f00 ... py-4">
          <ul className="flex flex-row-reverse space-x-20 space-x-reverse ... pr-20 ">
            <ul className='text-white font-normal text-2xl'><a href='resume.js'>suman</a> </ul>
            <ul className='text-slate-400 hover:text-sky-400'><a href={About}>ABOUT</a></ul>
            <ul className='text-slate-400 hover:text-sky-400'>PROJECTS</ul>
            <ul className='text-slate-400 hover:text-sky-400'> RESUME</ul>
          </ul>
        </nav>
      </div>


      <div className='page1'>
        <div className='head1'>
          <h1 className=' pt-10  font-extrabold text-transparent text-6xl bg-gradient-to-r from-red-700 to-blue-700 bg-clip-text text-transparent pb-10'  >Hey I'm Suman Das </h1>
          <p className='text-3xl text-white italic hover:not-italic '>“I don't just build , I build  that SELLS”</p>
        </div>

        <Player
          src={animation}
          className="player"
          loop
          autoplay
          speed={0}
          style={{ height: '400px', width: '400px' }}
        />
      </div>

      <div className='flex flex-wrap justify-center mb-9 w-6/6'>
        <h3 className=' text-white text-lg tracking-wider pr-2'>WORK</h3> <h3 className=' text-red-700 font-bold ... text-lg tracking-wider'> EXPERIENCE</h3>
        <div className='bg-black w-4/6 h-px mt-4 ml-3'> </div>
      </div>
      <div>
        <Tabs />
      </div>

      <div>
        <Project />
      </div>
      <Experience />
      <div>
        <Footer />
      </div>

      

    </>
  );
}

export default App;

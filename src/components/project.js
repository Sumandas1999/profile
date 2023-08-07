import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import web from '../lotties/allwebdev.json'
const Project = () => {
    return (
        <> <div className="flex flex-wrap justify-center mb-9 w-6/6">
            <h3 className=" text-lg tracking-wider pr-2">Project</h3>
            <h3 className=" font-bold ... text-lg tracking-wider">
                Done
            </h3>
            <div className="bg-black w-4/6 h-px mt-4 ml-3"> </div>
        </div>
            <div className='flex justify-center  mb-20  overflow-hidden '>
                <div className='flex border border-sky-600 border-2 max-w-4xl items-center height:  bg-zinc-300 pr-20 py-36 rounded-md
               hover:border-yellow-300 overflow-hidden duration-300 '>
                     <Player
          src={web}
          className="player"
          loop
          autoplay
          speed={0}
          style={{ height: '400px', width: '400px' }}
        />
                    <div className='flex-col '>
                        <h1 className='text-5xl py-4 text-blue-600 basis-1/2'>PROJECTS</h1>
                        <div className='py-5'>
                            <span className='text-2xl text-red-700'>Photo Website: </span><br/>
                            I skillfully designed a captivating photo website, harmonizing HTML, CSS, and JavaScript. The outcome is a visually enchanting platform where dynamic image galleries, responsive layouts, and smooth navigation combine to showcase the art of visual storytelling.

                            <br/> <span className='text-2xl text-red-700'> Profile Page:</span> <br/>
                            Crafting a dynamic profile page was my goal, accomplished through a fusion of HTML, CSS, and JavaScript. The result is an interactive and personalized page that presents essential information in an engaging manner, leaving a memorable digital footprint.

                          <br/> <span className='text-2xl text-red-700' >Comparing PC Parts: </span>  <br/>
                            I developed a user-friendly platform for efficiently comparing PC parts. The project involved utilizing databases and APIs to enable real-time data retrieval. This resulted in an intuitive interface complete with visual aids like comparison tables, making PC component selection a breeze.
                        </div>
                        {/* <div >
                            <ul className='flex flex-row space-x-6 flex-wrap '>
                                <li className=' text-blue-600 hover:text-orange-600 duration-500 pb-3'> React</li>
                                <li className='text-blue-600 hover:text-orange-600 duration-500 pb-3' >typescript</li>
                                <li className='text-blue-600 hover:text-orange-600 duration-500 pb-3'>react knove</li>
                                <li className='text-blue-600 hover:text-orange-600 duration-500 pb-3'>net lify</li>
                                <li className='text-blue-600 hover:text-orange-600 duration-500 pb-3'>apollo client</li>


                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>  </>
    )
}

export default Project;
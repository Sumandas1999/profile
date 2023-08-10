import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import work from '../lotties/work.json'
const Experience = () => {
    return (
        <>
            <div className=' flex justify-center  mb-20 '>
                <div className='experience-1 flex border border-sky-600 border-2 max-w-4xl items-center height:  bg-zinc-300 pr-20 py-36 rounded-md
               hover:border-yellow-300 overflow-hidden duration-300 '>
                    <div> <Player
                        src={work}
                        className="player"
                        loop
                        autoplay
                        speed={0}
                        style={{ height: '300px', width: '300px' }}
                    /> </div>
                    <div className='flex-col  '>
                        <h1 className='h1-exp text-5xl py-4 text-blue-600 basis-1/2'>Experience</h1>
                        <div className='data-2 py-5'><span className='gepto-1 text-red-700 text-2xl '> Web Development Odyssey at</span>  <span className='gepto-link text-2xl text-blue-700 underline underline-offset-4  '><a href='https://gepton.com/'>Gepton</a> </span>

                            <br />My captivating web development journey kicked off at Gepton, where I delved into HTML, CSS, and JavaScript, building a strong front-end foundation. Progressing to back-end, Python, Django, and database prowess became my arsenal as a versatile full-stack developer. Collaborative projects heightened my teamwork and communication finesse. Adopting React, Vue.js, and cloud platforms, I stayed ahead in the tech curve. From leading teams to open-source contributions, Gepton amplified every milestone on my path. Fueled by gratitude for growth, I'm geared to craft innovative web experiences for the future.


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

export default Experience;
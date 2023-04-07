import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {Cursor, Typewriter} from 'react-simple-typewriter';
import Skills from './Skills';

const Terminal = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const { ref, inView, entry } = useInView({threshold: 1});
  const textRef = useRef();

  useEffect(() => {
    if (inView) setIsInView(true);
    if (!inView) {
      setIsInView(false);
      setIsTypingDone(false);
    }
  }, [inView]);

  const handleDone = () => {
    textRef.current.innerText = "";
    setIsTypingDone(true);
  }

  return (
    <section id="terminal" className='h-screen w-full flex justify-center items-center'>
      <div className='terminal drop-shadow-2xl'>
        <div className='toolbar'>
          <span className='toolbar__circle bg-[#ff605c]'></span>
          <span className='toolbar__circle bg-[#ffbd44]'></span>
          <span className='toolbar__circle bg-[#00ca4e]'></span>
        </div>

        <div className='console'>
            <span>root@localhost <span className='mr-2'>➜</span> </span>
            <div ref={ref} className='text-gray-100'>
              { isInView &&
                <span ref={textRef}>
                  <Typewriter 
                    words={['skills', ' ']}
                    loop={1}
                    typeSpeed={200}
                    deleteSpeed={200}
                    onDelete={handleDone}
                  />
                </span> 
              }
              <Cursor cursorStyle={<span className='terminal__cursor'></span>} />
            </div>
        </div>
        { isTypingDone && isInView && <Skills /> }
      </div>
    </section>
  )
}

export default Terminal
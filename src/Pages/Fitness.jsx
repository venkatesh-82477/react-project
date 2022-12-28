import React from 'react'
import {FaArrowDown} from 'react-icons/fa' 
import F1 from './../Images/Fit/F1.jpeg'
import F2 from './../Images/Fit/F2.jpeg'
import F3 from './../Images/Fit/F3.jpeg'
import F4 from './../Images/Fit/F4.jpeg'
import F5 from './../Images/Fit/F5.jpeg'
import F6 from './../Images/Fit/F6.jpeg'
import F7 from './../Images/Fit/F7.jpeg'
import F8 from './../Images/Fit/F8.jpeg'
import F9 from './../Images/Fit/F9.jpeg'
import F10 from './../Images/Fit/F10.jpeg'
import F11 from './../Images/Fit/F11.jpeg'
import F12 from './../Images/Fit/F12.jpeg'
import F13 from './../Images/Fit/F13.jpeg'
import F14 from './../Images/Fit/F14.jpeg'
import F15 from './../Images/Fit/F15.jpeg'
import {useNavigate} from "react-router-dom"
const Fitness = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='Fit'>
      <div className='Ftop'>
      <p className='p1'><span className='the'>Fit</span>ness</p>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F1} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F2} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F3} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F4} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F5} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F6} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F7} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F8} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F9} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
      </div>
      <div className='Ttop'>
      <p className='p1'><span className='the'>Top </span>Posts</p>
      <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F9} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F10} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F11} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F12} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F13} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='addv'>Advertisement</div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F14} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={F15} alt="" id='latest1'/>
          <p id='china'>Visit Fitness center</p>
          <p id='china2'>Fitness<span id='china22'> / November 21 2022</span></p>
          </div>
      </div>
      </div>
      </>
  )
}

export default Fitness

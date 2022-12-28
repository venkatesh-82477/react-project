import React from 'react'
import {FaArrowDown} from 'react-icons/fa' 
import T1 from './../Images/Tech/T1.avif'
import T2 from './../Images/Tech/T2.avif'
import T3 from './../Images/Tech/T3.avif'
import T4 from './../Images/Tech/T4.avif'
import T5 from './../Images/Tech/T5.avif'
import T6 from './../Images/Tech/T6.avif'
import T7 from './../Images/Tech/T7.avif'
import T8 from './../Images/Tech/T8.jpg'
import T9 from './../Images/Tech/T9.jpg'
import T10 from './../Images/Tech/T10.jpg'
import T11 from './../Images/Tech/T11.jpeg'
import T12 from './../Images/Tech/T12.jpeg'
import T13 from './../Images/Tech/T13.jpeg'
import T14 from './../Images/Tech/T14.png'
import T15 from './../Images/Tech/T15.jpeg'
import {useNavigate} from "react-router-dom"
const Technology = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='Tech'>
      <div className='Ttop'>
      <p className='p1'><span className='the'>Tech</span>nology</p>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T1} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T2} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T3} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T4} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T5} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T6} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T7} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T8} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T9} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
      </div>
      <div className='Ttop'>
      <p className='p1'><span className='the'>Top </span>Posts</p>
      <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T9} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T10} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T11} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T12} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T13} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='addv'>Advertisement</div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T14} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='tech1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={T15} alt="" id='latest1'/>
          <p id='china'>Visit latest Technologies</p>
          <p id='china2'>Tech<span id='china22'> / November 21 2022</span></p>
          </div>
      </div>
      </div>
      </>
  )
}

export default Technology

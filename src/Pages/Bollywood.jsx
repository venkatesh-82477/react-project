import {FaArrowDown} from 'react-icons/fa' 
import b1 from "./../Images/b1.jpeg"
import b2 from "./../Images/b2.jpeg"
import b3 from "./../Images/b3.jpeg"
import b4 from "./../Images/b4.jpeg"
import b5 from "./../Images/b5.jpeg"
import b6 from "./../Images/b6.jpeg"
import b7 from "./../Images/b7.jpeg"
import b8 from "./../Images/b8.jpeg"
import b9 from "./../Images/b9.jpeg"
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Bollywood = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className='bolly'>
      <div className='btop'>
      <p className='p1'><span className='the'>Bolly</span>wood</p>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b1} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b2} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b3} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b4} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b5} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b6} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b7} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b8} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b9} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
      </div>
      <div className='btop'>
      <p className='p1'><span className='the'>Top </span>Posts</p>
      <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b9} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b8} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b5} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b1} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b4} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='addv'>Advertisement</div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b2} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={b3} alt="" id='latest1'/>
          <p id='china'>Watch Bollywood Movies</p>
          <p id='china2'>Movies<span id='china22'> / November 21 2022</span></p>
          </div>
      </div>
      </div>
      </>
  )
}

export default Bollywood

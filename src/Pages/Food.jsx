import React from 'react'
import {useNavigate} from "react-router-dom"
import {FaArrowDown} from 'react-icons/fa' 
import f1 from './../Images/Food/f1.jpeg'
import f2 from './../Images/Food/f2.jpeg'
import f3 from './../Images/Food/f3.jpeg'
import f4 from './../Images/Food/f4.jpeg'
import f5 from './../Images/Food/f5.jpeg'
import f6 from './../Images/Food/f6.jpeg'
import f7 from './../Images/Food/f7.jpeg'
import f8 from './../Images/Food/f8.jpeg'
import f9 from './../Images/Food/f9.jpeg'
import f10 from './../Images/Food/f10.jpeg'
import f11 from './../Images/Food/f11.jpeg'
import f12 from './../Images/Food/f12.jpeg'
import f13 from './../Images/Food/f13.jpeg'
import f14 from './../Images/Food/f14.jpeg'
import f15 from './../Images/Food/f15.jpeg'
const Food = () => {
  const navigate=useNavigate();
  return (
    <>
    <div className='Fit'>
      <div className='Ftop'>
      <p className='p1'><span className='the'>Fo</span>od</p>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f1} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f2} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f3} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f4} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f5} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f6} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f7} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f8} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f9} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
      </div>
      <div className='Ttop'>
      <p className='p1'><span className='the'>Top </span>Posts</p>
      <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f9} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f10} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f11} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f12} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f13} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='addv'>Advertisement</div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f14} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='Fit1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={f15} alt="" id='latest1'/>
          <p id='china'>Get Tasty Food</p>
          <p id='china2'>Food<span id='china22'> / November 21 2022</span></p>
          </div>
      </div>
      </div>
      </>
  )
}

export default Food
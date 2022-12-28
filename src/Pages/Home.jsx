import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaArrowDown,FaArrowRight} from 'react-icons/fa' 
import img1 from "./home.jpg"
import h1 from "./h1.jpg"
import h2 from "./h1.jpg"
import china from "./china.jpg"
import articles from "./articles.jpg"
import top from './../top.jpg'
export default function Home() {
  const navigate=useNavigate();
  return (
    <>
      <div className='grid-container'>
        <div className='grid1' onClick={()=>{
            navigate('/Data');
        }}>
        <img src={img1} alt="" id='img1' />
        <div className='text'>Title of vertical gallery<br></br>
        <span className='txt'>Travel / November 21 2022</span>
        </div>
        </div>
        <div className='grid2' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={h1} alt=""  id='img2'/>
          <div className='text1'>The Sound cloud <br></br>You loved is doomed<br></br>
        <span className='txt1'>Travel / November 21 2022</span>
        </div>
        </div>
        <div className='grid3' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={h2} alt=""  id='img3'/>
          <div className='text2'>The Sound cloud <br></br>You loved is doomed<br></br>
        <span className='txt2'>Travel / November 21 2022</span>
        </div>
        </div>
      </div>
      <p className='p1'><span className='the'>The</span> Latest</p>
      <div className='flex-container'>
        <div className='flex1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={china} alt="" id='latest' />
          <p id='china'>Joshua Tree Overnight Adventure</p>
          <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
          <p id='china2'>Travel <span id='china22'>/ November 21 2022</span></p>
        </div>
        <div className='flex1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={china} alt="" id='latest' />
          <p id='china'>Joshua Tree Overnight Adventure</p>
          <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
          <p id='china2'>Travel <span id='china22'>/ November 21 2022</span></p>
        </div>
        <div className='flex1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={china} alt="" id='latest' />
          <p id='china'>Joshua Tree Overnight Adventure</p>
          <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
          <p id='china2'>Travel <span id='china22'>/ November 21 2022</span></p>
        </div>
      </div>
      <p className='p1'><span className='the'>Latest</span> Articles</p>
      <div className='grid-con'>
        <div className='grid-item' onClick={()=>{
            navigate('/Data');
        }}>
          <p id='china'><img src={articles} alt="" className='art'/>Catch waves with an adventure guide <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well</p><p id='china2'>Travel<span id='china22'> / November 21 2022</span></p></p>
        </div>
        <div className='grid-item1' onClick={()=>{
            navigate('/Data');
        }}>
        <p id='china'><img src={articles} alt="" className='art'/>Catch waves with an adventure guide <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well</p><p id='china2'>Travel<span id='china22'> / November 21 2022</span></p></p>
        </div>
        <div className='grid-item2' onClick={()=>{
            navigate('/Data');
        }}>
        <p id='china'><img src={articles} alt="" className='art'/>Catch waves with an adventure guide <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well</p><p id='china2'>Travel<span id='china22'> / November 21 2022</span></p></p>
        </div>
        <div className='grid-item3' onClick={()=>{
            navigate('/Data');
        }}>
        <p id='china'><img src={articles} alt="" className='art'/>Catch waves with an adventure guide <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well</p><p id='china2'>Travel<span id='china22'> / November 21 2022</span></p></p>
        </div>
        <div className='grid-item4'>Advertisement</div>
        <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
      </div>
      <p className='p1'><span className='the'>Top </span> Posts</p>
      <div className='toppost'>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={top} alt="" id='latest1'/>
          <p id='china'>Catch waves with an adventure guide</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={top} alt="" id='latest1'/>
          <p id='china'>Catch waves with an adventure guide</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={top} alt="" id='latest1'/>
          <p id='china'>Catch waves with an adventure guide</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={top} alt="" id='latest1'/>
          <p id='china'>Catch waves with an adventure guide</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={top} alt="" id='latest1'/>
          <p id='china'>Catch waves with an adventure guide</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
          <div className='top1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={top} alt="" id='latest1'/>
          <p id='china'>Catch waves with an adventure guide</p>
          <p id='china2'>Travel<span id='china22'> / November 21 2022</span></p>
          </div>
      </div>
      <p className='p1'><span className='the'>Latest </span> Stories</p>
      <div className='stories'>
      <div className='story' onClick={()=>{
            navigate('/Data');
        }}>
        <p id='china'>Catch waves with an adventure guide</p>
        <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
        <p id='china2'>TECH<span id='china22'> / TODAY AT 11:54</span></p>
      </div>
      <div className='story' onClick={()=>{
            navigate('/Data');
        }}>
        <p id='china'>Catch waves with an adventure guide</p>
        <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
        <p id='china2'>TECH<span id='china22'> / TODAY AT 11:54</span></p>
      </div>
      <div className='story' onClick={()=>{
            navigate('/Data');
        }}>
        <p id='china'>Catch waves with an adventure guide</p>
        <p id='china1'>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces</p>
        <p id='china2'>TECH<span id='china22'> / TODAY AT 11:54</span></p>
      </div>
      </div>
      <p>View more<FaArrowRight className='FaArrowDown'></FaArrowRight></p>
    </>
  )
}

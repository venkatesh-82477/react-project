import React from 'react'
import {FaArrowDown} from 'react-icons/fa' 
import H1 from './../Images/Holly/H1.jpeg'
import H2 from './../Images/Holly/H2.jpeg'
import H3 from './../Images/Holly/H3.jpeg'
import H4 from './../Images/Holly/H4.jpeg'
import H5 from './../Images/Holly/H5.jpeg'
import H6 from './../Images/Holly/H6.jpeg'
import H7 from './../Images/Holly/H7.jpeg'
import H8 from './../Images/Holly/H8.jpeg'
import H9 from './../Images/Holly/H9.jpeg'
import H10 from './../Images/Holly/H10.jpeg'
import H11 from './../Images/Holly/H11.jpeg'
import H12 from './../Images/Holly/H12.jpeg'
import H13 from './../Images/Holly/H13.jpeg'
import H14 from './../Images/Holly/H14.jpeg'
import H15 from './../Images/Holly/H15.jpeg'
import { useNavigate } from 'react-router-dom'
const Hollywood = () => {
  const data=[
  {
    id:1,
    image:H1,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:2,
    image:H2,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:3,
    image:H3,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:4,
    image:H4,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:5,
    image:H5,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:6,
    image:H6,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },
  {
    id:7,
    image:H7,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },
  {
    id:8,
    image:H8,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },
  {
    id:9,
    image:H9,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },
]
const dataa=[
  {
    id:1,
    image:H10,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:2,
    image:H11,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:3,
    image:H12,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:4,
    image:H13,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:5,
    image:H14,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },

  {
    id:6,
    image:H15,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  },
  {
    id:7,
    image:H13,
    title:"Watch Hollywood Movies",
    text1:"Movie",
    text2:" / November 21 2022"
  }
]
   const navigate=useNavigate();
  return (
    <>
    
<div className='Holly'>
      <div className='Htop'>
      <p className='p1'><span className='the'>Holly</span>wood</p>
    {
      data.map((item)=>
          <div className='holly1' onClick={()=>{
            navigate('/Data');
        }}>
          <img src={item.image} alt="" id='latest1'/>
          <p id='china'>{item.title}</p>
          <p id='china2'>{item.text1}<span id='china22'>{item.text2}</span></p>
          </div>
      )}
          <p><FaArrowDown className='FaArrowDown'></FaArrowDown>Load more</p>
      </div>
      <div className='Ttop'>
      <p className='p1'><span className='the'>Top </span>Posts</p>
      {
      dataa.map((item)=>
          <div className='holly1' onClick={()=>{
            navigate('/Data');
   
        }}>
          <img src={item.image} alt="" id='latest1'/>
          <p id='china'>{item.title}</p>
          <p id='china2'>{item.text1}<span id='china22'>{item.text2}</span></p>
          </div>
      )}
          <div className='addv'>Advertisement</div>
      </div>
      </div>
      </>
      )}

export default Hollywood
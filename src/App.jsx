// import { useState,useEffect } from 'react'

// import './App.css'
// import Navbar from './components/Navbar'
// import { Routes,Route } from 'react-router-dom'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// import Homepage from './pages/Homepage'
// import Header from './pages/Header'
// function App() {
// const [values, setvalues] = useState({category:"",date:"",age:""})
// const [collection, setcollection] = useState([])
// useEffect(() => {
//  let savedvalues=localStorage.getItem("savedvalues")
//  if(savedvalues){
//   setcollection(JSON.parse(savedvalues))
//  }
// }, [])

// const r=createBrowserRouter(
//   [
//     {
//       path:"/",
//       element: <><Navbar/><Home/></>
//     },
//     {
//       path:"/about",
//       element: <><Navbar/><About/></>
//     },
//     {
//       path:"/contact",
//       element:<><Navbar/><Contact/></>
//     },
//     {
//       path:"/login",
//       element:<><Login/></>
//     }
//   ]
// )

// const handlechange=(e)=>{
//   setvalues({...values,[e.target.name]:e.target.value})
//   console.log({...values,[e.target.name]:e.target.value});

// }
// const savevalues=()=>{
//   setcollection([...collection,{...values}])
//   console.log([...collection,{...values}])
//   localStorage.setItem("savedvalues",JSON.stringify([...collection,{...values}]))
//   alert("saved successfully")
//   values.category="";
//   values.age="";
//   values.date="";
 
// }
// const deletevalues=(date)=>{
//   if(confirm("Do you really want to delete")){
//   setcollection(collection.filter(item=>item.date!==date));
//   localStorage.setItem("savedvalues",JSON.stringify(collection.filter(item=>item.date!==date)))
//   }
// }
// const editvalues=(date)=>{
//   console.log("editing the password with date"+date)
//   let a=collection.filter(item=>item.date===date)[0];
//   {values.category=a.category,values.age=a.age,values.date=a.date}
//   console.log(values)
//   setcollection(collection.filter(item=>item.date!==date));
// }
//   return (
//     <>
//     <Navbar/>
//     <Header/>
//     {/* <div className="practice">
//     <RouterProvider router={r}/>
//     <div className="values flex flex-col justify-between items-center ">
//       <input type="text" value={values.category} onChange={handlechange} name="category" id="" className='text-black px-3 py-2 my-5 border-lime-500 border-2 text-xl' placeholder='enter your category'/>
//       <input type="text" value={values.age} onChange={handlechange}  name="age" id="" className='text-black px-3 py-2 my-5 border-lime-500 border-2 text-xl' placeholder='enter your age' />
//       <input type="date" value={values.date} onChange={handlechange}  name="date" id="" className='text-black px-3 py-2 my-5 border-lime-500 border-2 text-xl' placeholder='enter your delivery date' />
//       <button onClick={savevalues} className='bg-green-700 text-white'>
//         Save
//       </button>
//     </div>
//     {collection.length==0 && <div>No categories searched to display</div>}
//     {collection.length!=0 && <div className="flex flex-col overflow-hidden"> <div className="flex justify-around my-4 text-xl ">
//     <span className='text-black bg-amber-300'>category</span>
//     <span className='text-black bg-amber-300'>age</span>
//     <span className='text-black bg-amber-300'>date</span>
//     <span className='text-black bg-amber-300'>Delete</span>
//     </div>
//     <div className="second">
//     {collection.map((item,index)=>{
//       return <div key={index}>
//         <div className="flex justify-around my-4 text-xl ">
//         <span className='text-black bg-amber-300'>{item.category}</span>
//     <span className='text-black bg-amber-300'>{item.age}</span>
//     <span className='text-black bg-amber-300'>{item.date}</span>
//     <span><button onClick={()=>{deletevalues(item.date)}} className='h-10 w-full font-bold  text-orange-600 bg-emerald-600'>Delete</button></span>
//     <span><button onClick={()=>{editvalues(item.date)}} className='h-10 w-full font-bold  text-orange-600 bg-emerald-600'>Edit</button></span>
//         </div>
//         </div>
       
//     })}
//     </div>
//     </div> 
   
// }
//     </div>
//     */}

  
  
       
//     </>
//   )
// }

// export default App


// new code

import { useEffect, useState } from 'react'
import './App.css'
import Homepage from './pages/Homepage'
import Navbar from './pages/Navbar'
import Aboutme from './pages/Aboutme'
import Header from './components/Header1'
import Firstpage from './components/Firstpage'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certificate from './components/Certificate'
import Cfrom from './components/Cfrom'
import Footer from './components/Footer'
import FollowCursor from './components/FollowCursor'
import NeonCursor from './components/NeonCursor'
import GridDistortion from './components/GridDistortion'
import Griduse from './components/Griduse'
import LetterGlitch from './components/LetterGlitch'
import GridMotionuse from './components/GridMotionuse'
import { Loader } from 'lucide-react'
import Card from './components/Card'
import Experience from './components/Experience'
import ExperienceTimeline from './components/ExperienceTimeline'
import CircularGallery from './components/CircularGallery'
import CircularGalleryuse from './components/CircularGalleryuse'
import RolllingGalleryuse from './components/RolllingGalleryuse'
import GlitchTextuse from './components/GlitchTextuse'
import BounceCards from './components/BounceCards'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Aboutme from './components/Aboutme'
// import Work from './components/Work'
// import Projects from './components/Projects'
// import Achievements from './components/Achievements'
// import Certificate from './components/Certificate'
// import ParticleRing from './components/ParticleRing'
// import Contact from './components/Contact'
// import Cfrom from './components/Cfrom'
// import SwipeCards from './components/SwipeCards'
// import TiltShineCard from './components/TiltShineCard'
// import Homepage from './components/Homepage'

function App() {
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    // Simulate loading time (like fetching data or initializing app)
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after data or component is loaded
    }, 3000); // 2 seconds delay, you can adjust this based on your needs

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

//   return (
//     <>
//      {/* <FollowCursor/> */}
//      {/* <Griduse/> */}
//      {/* <LetterGlitch
//   glitchSpeed={50}
//   centerVignette={true}
//   outerVignette={false}
//   smooth={true}
// /> */}
//  {loading ? (
//         // Show loader when loading is true
//         <Loader />
//       ) : (
// <GridMotionuse/>
//      <NeonCursor/>
//     <Navbar/>
//    <Firstpage/>
//     <Aboutme/>
//     <Projects/>
//  <Achievements/>
//  <Certificate/>
//  <Cfrom/>
//  <Footer/>
      
//       </>
      
//   )
// )
// }

// export default App

return (
  <>
    {/* <FollowCursor/> */}
    {/* <Griduse/> */}
    {/* <LetterGlitch
    glitchSpeed={50}
    centerVignette={true}
    outerVignette={false}
    smooth={true}
    /> */}
    {loading ? (
      // Show loader when loading is true
      <GlitchTextuse/>
    ) : (
      <>
        <GridMotionuse />
        <NeonCursor />
        <Navbar />
        <Firstpage />
        {/* <Aboutme /> */}
        <ExperienceTimeline/>
        <Projects />
        <Achievements />
        <Certificate />
        

       {/* <CircularGalleryuse/> */}
       {/* <RolllingGalleryuse/> */}
        <Cfrom />
        <Footer />
        {/* <Card/> */}
        
      </>
    )}
  </>
);
}
export default App
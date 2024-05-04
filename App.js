import logo from './logo.svg';
import './App.css';
import img from "./index.jpg"
import img3 from "./br3.jpeg"
import img1 from "./br1.jpeg"
import imgr1 from "./hr1.png"
function app() {
  return (
   
   <><div
   className="w-full h-screen bg-no-repeat bg-cover"
   style={{ backgroundImage: "url(" + img + ")" }}
 >
  <h1 className='text-center  p-[20px] font-sans text-[50px] text-red-600'>"Dear"</h1>
  <p className='text-center text-2xl text-[25px] p-[20px] text-black-800'> "I've never had a moment's doubt. I love you.
I believe in you completely.
You are my dearest one. My reason for life."</p>
<div className="w-full h-80  bg-no-repeat bg-cover mt-20 "style={{ backgroundImage: "url(" + img + ")" }}>
  <div className='grid grid-cols-3 gap-4'>
  <div className='flex justify-center'><img className='h-80 w-56 bg-no-repeat bg-cover' style={{backgroundImage: "url(" + img3 + ")" }}></img></div>
  <div className='flex flex-col jus'><p className='flex-none text-center'>I</p><img className='h-60 w-60 bg-no-repeat bg-cover justify-center' style={{backgroundImage: "url(" + imgr1 + ")" }}></img><p>you</p></div>
  <div className='flex justify-center'><img className='h-80 w-56 bg-no-repeat bg-cover'style={{backgroundImage: "url(" + img1 + ")" }}></img></div>
  </div>
 </div>
 </div>
   </>
  );   
}

export default app
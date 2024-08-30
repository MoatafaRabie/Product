import Appp from './componant/app';
import MyModal from './componant/modul';
import './App.css';
import { useState } from 'react';
import Formlist from './componant/formlist';
import ErrorMsg from './componant/ErrorMsg';
import  List  from './componant/list';

function App() {

  const obj ={
    ProductTitle : "",
    ProductDiscription: "",
    ProductImgeURL: "",
    Price : ""
  }
 
//   ************* catch inputs value ****************//
const[ stata,setStats] =useState(obj)

//   ************* make span vaild under every input ****************//

const [msgg ,setMsgg] =useState(obj);


let handler =function (e){
  setStats((old)=>{
    
    return{...old,[e.target.name]:e.target.value}

  });
  setMsgg((old)=>{
    return{...old,[e.target.name]:""}
  })
};

//   *************map on inputs****************//

const formlistlist =Formlist.map(input =>(
   
  <form  key={input.id}>
     <label>{input.lable}</label>
     <input className='w-full rounded-md h-11 p-3 border-2 shadow-md 'name={input.lable} type='text' onChange={handler}  /><br/>
      < ErrorMsg   msg={msgg[input.lable]}/>
      
     </form>
));

const products =List.map(product=><Appp key={product.id} product={product} /> )

//   *************onChange of map input****************//


  return (
    <>
    <div className='flex justify-center my-5 space-x-36'>
    <h1 className='text-2xl'>List of Product</h1>
    <MyModal stata={stata} setStats={setStats}obj={obj} formlistlist={formlistlist} setMsgg={setMsgg}/>
    </div>
    <div className=' flex  w-auto ml-20 container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 '>
    <Appp stata={stata} obj={obj} formlistlist={formlistlist}/>
    <Appp/>
    {products}
    </div>
    </>
  );
}

export default App;

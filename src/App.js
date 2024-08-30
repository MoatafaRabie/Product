import Appp from './componant/app';
import MyModal from './componant/modul';
import './App.css';
import { useState } from 'react';
import Formlist from './componant/formlist';
import ErrorMsg from './componant/ErrorMsg';
import List from './componant/list';
import Addcolor from './componant/color';
import Valid from './validtion/vaild';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

function App() {

  const obj ={
    ProductTitle : "",
    ProductDiscription: "",
    ProductImgeURL: "",
    Price : ""
  }
  //   ************* close & open Modul****************//
  const [isOpen, setIsOpen] = useState(false)
  function open() {
    setIsOpen(true)
  }
  function close() {
    setIsOpen(false)
  }
      //   ************* open & close Edit ****************//

  const [isOpenEditmModul, setIsOpenEditmModul] = useState(false)
  function openEdit() {
    setIsOpenEditmModul(true)
  }
  function closeEdit() {
    setIsOpenEditmModul(false)
  }
  //   ************* loop Product value ****************//

  const [edit ,setEtit]=useState(obj)
  console.log(edit);

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
let handlerEdit =function (e){
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
const formlistlistEdit =Formlist.map(input =>(
   
  <form  key={input.id}>
     <label>{input.lable}</label>
     <input className='w-full rounded-md h-11 p-3 border-2 shadow-md 'name={input.lable} type='text' onChange={handlerEdit}  /><br/>
      < ErrorMsg   msg={msgg[input.lable]}/>
      
     </form>
));


const products =List.map(product=><Appp key={product.id} stata={stata}  product={product} setEtit={setEtit} openEdit={openEdit} /> )


//   ************* color****************//

const [temp ,setTemp]=useState([])
  const color=[
    "#00000F"
   ,"#7FFFD4"
   ,"#8A2BE2"
   ,"#0000FF"
   ,"#A52A2A"
   ,"#0000AF"
   ,"#7FFFA4"
   ,"#8A2BA2"
   ,"#0000BF"
   ,"#A52AAA"
]
    //console.log( "%c stata ","background-color: red" );

//   *************Button close****************//
const onclose=()=>{
  setStats(obj);
  close();
  
}
const oncloseEdit=()=>{
  setStats(obj);
  closeEdit();
  
}
//   *************Button submit****************//
const onsubmit=(e)=>{
  e.preventDefault();

  const errors =Valid(stata);
  const haserror = Object.values(errors).some(value => value ==="") && Object.values(errors).every(value => value==="")
  if(haserror){
    return setMsgg(errors)
    
  }
  console.log(errors);
}
//   *************color****************//

const renderd =color.map((color)=> <Addcolor key={color} color={color} 
onClick={()=>{
  if(temp.includes(color)){
    setTemp((old)=>old.filter(item =>item !== color ))
    return;
  }
  setTemp((old)=>[...old,color])}} />)

const renderdd =temp.map((color,inx)=> <span key={inx} className='text-white mx-1 px-1 text-sm rounded-md' style={{backgroundColor :color}} >{color} </span >)

//   *************onChange of map input****************//


  return (
    <>
    <div className='flex justify-center my-5 space-x-36'>
    <h1 className='text-2xl'>List of Product</h1>
    <MyModal stata={stata} setStats={setStats}obj={obj} formlistlist={formlistlist} setMsgg={setMsgg}
     renderdd={renderdd} renderd={renderd} onsubmit={onsubmit} onclose={onclose} open={open}
     color={color} close={close} isOpen={isOpen}/>
    </div>
    <div className=' flex  w-auto ml-20 container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 '>
    {products}
   
    
    </div>
    {<div>
    <Button
        onClick={openEdit}
        className="w-48 rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Add Product
      </Button>
      <Dialog open={isOpenEditmModul} as="div" className="relative z-10 focus:outline-none" onClose={closeEdit}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel 
              transition
              className="w-full max-w-sm rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                          <h1 className='text-xl'>Add A New Product</h1><br/>

              <DialogTitle className="space-y-1 ">
                {formlistlistEdit}
                

              </DialogTitle  >

              <div className="flex items-center my-3 space-x-2 ">

              
              {renderd}
              </div>
              {renderdd}

               
              <div className="mt-4 flex space-x-3">
                <Button
                  className="w-full  rounded-md bg-blue-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-600"
                  onClick={onsubmit} onDoubleClick={closeEdit}>Submit</Button>
                  <Button
                  className="w-full  rounded-md bg-gray-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-600"
                  onClick={oncloseEdit}  >cancel</Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      </div>}
    </>
  );
}

export default App;

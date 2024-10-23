import Appp from './componant/app';
import MyModal from './componant/modul';
import './App.css';
import {  useState } from 'react';
import Formlist from './componant/formlist';
import ErrorMsg from './componant/ErrorMsg';
import List from './componant/list';
import Addcolor from './componant/color';
import Valid from './validtion/vaild';
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import {toast,Toaster }from 'react-hot-toast';
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
        //   ************* Product idx ****************//
      const [productidx ,setProductidx] =useState(0);
      //   ************* open & close Remove ****************//

      const [isOpenRemovemModul, setIsOpenremovemModul] = useState(false)
      function openRemove() {
        setIsOpenremovemModul(true)
      }
      function closeRemove() {
        setIsOpenremovemModul(false)
      }
  //   ************* loop Product value ****************//

  const [edit ,setEtit]=useState(obj)
  //console.log(edit);

//   ************* catch inputs value ****************//
const[ stata,setStats] =useState(obj)
//console.log(stata);
//   ************* Add product ****************//
const [addproduct,setAddproduct] =useState(List);
//console.log(addproduct);
//   ************* dele product ****************//
const [deleproduct,setDeleproduct] =useState(List);
//console.log(deleproduct);
//   ************* make span vaild under every input ****************//

const [msgg ,setMsgg] =useState(obj);
//console.log('pop',msgg.errors);


let handler =function (e){
  setStats((old)=>{
    
    return{...old,[e.target.name]:e.target.value}

  });
  setMsgg((old)=>{
    return{...old,[e.target.name]:""}
  })
};
//   ************* put inputs value ****************//

const[stataa ,setStatass]=useState(obj);
//console.log(stataa);

let handlerEdit =function (e){
  setEtit((old)=>{
    return{...old ,[e.target.name]:e.target.value}
  })
  setStatass((old)=>{
    
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
      { msgg.errors && < ErrorMsg   msg={msgg.errors[input.lable]}/>}
      
     </form>
));
const formlistlistEdit =Formlist.map(input =>(
   
  <form  key={input.id}>
     <label>{input.lable}</label>
     <input className='w-full rounded-md h-11 p-3 border-2 shadow-md 'name={input.lable} type='text' onChange={handlerEdit} value={edit[input.lable]} /><br/>
      { msgg.errors &&<ErrorMsg   msg={msgg.errors[input.lable]}/>}
      
     </form>
));


const products =addproduct.map((product, idx )=><Appp key={idx} openRemove={openRemove}  idx={idx} setDeleproduct={setDeleproduct} stataa={stataa} edit={edit} setProductidx={setProductidx} product={product} setEtit={setEtit} openEdit={openEdit} /> )


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
  setMsgg(obj);
  
}
const oncloseEdit=()=>{
  setStats(obj);
  closeEdit();

}
const oncloseRemove=()=>{
  closeRemove();
  
}
//   *************Button submit****************//
const onsubmitt=(e)=>{
  e.preventDefault();
  
  const errors =Valid(stata);
  //console.log(errors);

  console.log(errors.errors);
  const haserror =Object.values(errors.errors).some(value => value ==="") 
  && Object.values(errors.errors).every(value => value==="")
  console.log(haserror);
  if(!haserror){
    
    setMsgg(errors);
     return ;
  }
  
  onclose()

  setAddproduct((old)=>{
    //console.log(old);
    return[...old,stata]; }
  )



}
  const onsubmit=(e)=>{
    e.preventDefault();
    
    const errors =Valid(stata);
    const haserror =Object.values(errors.errors).some(value => value ==="") 
    && Object.values(errors.errors).every(value => value==="") 
       if(haserror){
      setMsgg(errors)
       return ;
    }
    closeEdit();
    setAddproduct((old)=>{
      return[...old,stata];
      
    })
    const Updatedproducts = [...addproduct]
    Updatedproducts[productidx] =edit;
    setAddproduct(Updatedproducts)
    
}
const onsubmitRemove=(e)=>{
  closeRemove();
  const filterd = addproduct.filter((product)=>product.id !== edit.id)
  setAddproduct(filterd);
  toast('your product deleded', {
    duration: 4000,
    position: 'top-center',
    style: {backgroundColor:"black" ,color:"white"}

  })
  

}
//console.log('sss',msgg)
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
    <h1 className=' text-2xl'>List of Product</h1>
    <MyModal stata={stata} setStats={setStats}obj={obj} formlistlist={formlistlist} setMsgg={setMsgg}
     renderdd={renderdd} renderd={renderd} onsubmitt={onsubmitt} onclose={onclose} open={open}
     color={color} close={close} isOpen={isOpen}/>
    </div>
    <div className=' flex  w-auto ml-20 container grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 '>
    {products}
   
    
    </div>
    {<div>
    <Button
        onClick={openEdit}
        className="  py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white "
      >
      </Button>
      <Dialog open={isOpenEditmModul} as="div" className="relative z-10 focus:outline-none" onClose={closeEdit}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel 
              transition
              className="w-full max-w-sm rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                          <h1 className='text-xl'>IDIT THIS PRODUCT</h1><br/>

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
                 onClick={onsubmit} >Submit</Button>
                  <Button
                  className="w-full  rounded-md bg-gray-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-600"
                  onClick={oncloseEdit}  >cancel</Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      </div>}


      {/*remove               */}


      {<div>
    <Button
        onClick={openRemove}
        className="  py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
      </Button>
      <Dialog open={isOpenRemovemModul} as="div" className="relative z-10 focus:outline-none" onClose={closeRemove}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel 
              transition
              className="w-full max-w-sm rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                          <h1 className=' text-xl'>Are you sure you want to remove this product </h1><br/>

              <DialogTitle className="space-y-1 ">
                <p className='opacity-30'>
                  dopends on the company precidgios you cannot return the product you have been removed
                </p>
                

              </DialogTitle  >

              <div className="flex items-center my-3 space-x-2 ">

              
              </div>

               
              <div className="mt-4 flex space-x-3">
                <Button
                  className="w-full  rounded-md bg-red-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-600"
                 onClick={onsubmitRemove} >Yes,Remove</Button>
                  <Button
                  className="w-full  rounded-md bg-gray-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-600"
                  onClick={oncloseRemove}  >cancel</Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      </div>}
      <Toaster/>
    </>
  );
}

export default App;

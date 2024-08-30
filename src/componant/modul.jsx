import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Valid from '../validtion/vaild'
import Addcolor from "../componant/color"

export default function MyModal({obj,stata,setStats,formlistlist,setMsgg}) {

  //   ************* close & open ****************//
  const [isOpen, setIsOpen] = useState(false)
  function open() {
    setIsOpen(true)
  }
  function close() {
    setIsOpen(false)
  }
  
 
//const[ stata,setStats] =useState(obj)



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

return(

    <>
      <Button
        onClick={open}
        className="w-48 rounded-md bg-blue-600 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-sm rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
                          <h1 className='text-xl'>Add A New Product</h1><br/>

              <DialogTitle className="space-y-1 ">
                {formlistlist}
                

              </DialogTitle  >

              <div className="flex items-center my-3 space-x-2 ">

              
              {renderd}
              </div>
              {renderdd}

               
              <div className="mt-4 flex space-x-3">
                <Button
                  className="w-full  rounded-md bg-blue-600 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-600"
                  onClick={onsubmit} onDoubleClick={close}>Submit</Button>
                  <Button
                  className="w-full  rounded-md bg-gray-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-blue-600"
                  onClick={onclose}  >cancel</Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
)}
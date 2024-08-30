

  

 const Addcolor =({color,onClick})=>{

    return<>
        <span className="block w-5 h-5 rounded-full cursor-pointer " style={{backgroundColor:color}}
        
        onClick={onClick}></span>

        </>
}
export default Addcolor ;

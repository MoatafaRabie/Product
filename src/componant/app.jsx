

const Appp=({product,setEtit,openEdit})=> {
    const Edit =()=>{
        setEtit(product);
        openEdit();
        return<>

        </>
    }
 return(
    <>
    
<div className="ml-4 p-2 border-black bg-slate-100 max-w-60 mb-10" >
    <div>
    
    <img src={product.img} className="rounded-md" width={300}height={300} alt=''/>
    <h2>{product.title}</h2>
    </div>
    <p> {product.ProductDiscription} 
    </p><br/>
    <div className="flex items-center space-x-2"> 
        <span className="w-5 h-5 bg-black rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-slate-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-slate-400 rounded-full cursor-pointer"></span>

    </div>
    <p className="text-blue-600">
        {product.coucst}
        
        
    </p><br/>
    
        
    <div className="flex items-center space-x-2">
        <button className="bg-blue-600 rounded-md w-full text-white hover:bg-blue-500 h-9" onClick={Edit}>Edit</button>
        <button className="bg-red-600 rounded-md w-full text-white hover:bg-red-500 h-9" >delete</button>
        </div>
    
    </div>
    </>
 );   
}
export default Appp;
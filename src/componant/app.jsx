

const Appp=({product,setEtit,openEdit,edit,openRemove ,idx,addproduct,setAddproduct})=> {

    const Edit =()=>{
        setEtit(product);
        console.log(edit);
        openEdit();
        
        return<>

        </>
    }
    const dele=()=>{
        setEtit(product);
        openRemove();
        return<>
        </>
    }
 return(
    <>
    
<div className="ml-4 p-2 border-black bg-slate-100 max-w-60 mb-10" >
    <div>
    
    <img src={product.ProductImgeURL} className="rounded-md" width={300}height={300} alt=''/>
    <h2 className="text-lg">{product.ProductTitle}</h2>
    </div>
    <p className="opacity-40"> {product.ProductDiscription} 
    </p><br/>
    <div className="flex items-center space-x-2"> 
        <span className="w-5 h-5 bg-black rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-slate-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-red-800 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-blue-600 rounded-full cursor-pointer"></span>


    </div>
    <p className="text-blue-600">
        {product.Price}
        
        
    </p><br/>
    
        
    <div className="flex items-center space-x-2">
        <button className="bg-blue-600 rounded-md w-full text-white hover:bg-blue-500 h-9" onClick={Edit}>Edit</button>
        <button className="bg-red-600 rounded-md w-full text-white hover:bg-red-500 h-9" id={idx} onClick={dele}>delete</button>
        </div>
    
    </div>
    </>
 );   
}
export default Appp;
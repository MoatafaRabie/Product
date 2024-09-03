
const Valid =(ww)=>{
//console.log(ww);

    const errors={
        ProductTitle : "",
        ProductDiscription: "",
        ProductImgeURL: "",
        Price : ""
    }

  
    if(!ww.ProductTitle.trim() || ww.ProductTitle.length<10 || ww.ProductTitle.length> 80 ){
        errors.ProductTitle="invalid title must be atleast 10 "
    }
    if(!ww.ProductDiscription.trim() ||ww.ProductDiscription.length<10 || ww.ProductDiscription.length> 900 ){
        errors.ProductDiscription="invalid Discription must be atleast 10 "
    }
    var urlRegex=/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(ww.ProductImgeURL);
    if(!ww.ProductImgeURL.trim() || !urlRegex){
        errors.ProductImgeURL="invalid url"

    }
    if(!ww.Price.trim()|| isNaN(ww.Price)){
        errors.Price="invalid price must be number"

    }

    return{errors}
}
export default Valid ;
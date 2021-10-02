import { useEffect, useState } from "react";

//for this type of function must use "use" word before the function
//invocation
function useProduct () {

    const [product,setProduct] = useState([])
    
    useEffect(() => {
        fetch("./products.json")
        .then(Response => Response.json())
        .then(data => setProduct(data))
    },[])

    return [product,setProduct];
}

export default useProduct;
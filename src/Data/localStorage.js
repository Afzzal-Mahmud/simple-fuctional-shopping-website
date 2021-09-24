function storeData (id){
    const storeExist = localStorage.getItem("shopping-cart")
    let cartObject = {}

    if(!storeExist){
        cartObject[id] = 1;
    }
    else{
        cartObject = JSON.parse(storeExist);
        if(cartObject[id]){
            const newData = cartObject[id] + 1;
            cartObject[id] = newData; 
        }
        else{
            cartObject[id] = 1;
        }
    }
    localStorage.setItem("shopping-cart",JSON.stringify(cartObject))
}
function getDataFromStorage() {
    const existStorage = localStorage.getItem('shopping-cart');
    return existStorage ? JSON.parse(existStorage) : {} ;
}
export {storeData,getDataFromStorage};
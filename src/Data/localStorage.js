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

//remove from localstorage
function removeFromDb(key) {
    const existCart = JSON.parse(localStorage.getItem("shopping-cart"));
    delete existCart[key];
    localStorage.setItem('shopping-cart',JSON.stringify(existCart))
}
export {storeData,getDataFromStorage,removeFromDb};
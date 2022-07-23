const renderItems = (data) => {
    data.forEach((element) => {
        console.log(element);
    });
   
}


fetch('https://deliveryfoodtest-2fa70-default-rtdb.firebaseio.com/db/partners.json')
    .then((responce) => responce.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error);
    })
    
    
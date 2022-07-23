const restourant = 'food-band'

const renderItems = (data) => {
    data.forEach((element) => {
        console.log(element);
    });
   
}


fetch(`./db/${restourant}.json`)
    .then((responce) => responce.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })
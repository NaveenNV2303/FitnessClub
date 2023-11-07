const items = [
    {
        id:1,
        name: "Dumbell 10 KG",
        price: "$19.99",
        imageUrl: "images/dumbellBackground.png",
    },
    {
        id:2,
        name: "kettlebell 8 KG",
        price: "$9.99",
        imageUrl: "images/kettlebellBackground.png",
    },
    {
        id:3,
        name: "Dumbell 10 KG",
        price: "$19.99",
        imageUrl: "images/dumbellBackground.png",
    },
    {
        id:4,
        name: "kettlebell 8 KG",
        price: "$9.99",
        imageUrl: "images/kettlebellBackground.png",
    }
];


function loadData(){
    items.forEach(createItem)
}
function createItem(item){
    var el = `
    <div class="item">
        <img class="itemImage" src="${item.imageUrl}" alt="Product Image">
        <div class="itemDescription">
            <h3 class="itemName">${item.name}</h3>
            <h1 class="itemPrice">${item.price}</h1>
            <button class="itemButton" onClick="viewDescription(${item.id})">View Description</button>
        </div>
    </div>
`;
document.querySelector('.items').innerHTML+=el
}
function search(){
    var searchString = event.target.value
    document.querySelectorAll('.items .item').forEach((item)=>{
        item.classList.remove('displayNone')
        if(item.innerText.toLowerCase().indexOf(searchString.toLowerCase()) == -1){
            item.classList.add('displayNone')
        }
    })
}
function viewDescription(itemId){
    document.querySelector('.items').classList.add('displayNone')
    const selectedItem = items.find(item => item.id === itemId)  
    var el = `<p>${selectedItem.id}</p>`
    document.querySelector('.content').innerHTML=el
}
function reserveItem(itemId){
    document.querySelector('.items').classList.add('displayNone')
    const selectedItem = items.find(item => item.id === itemId)                             
    var el = `<p>${selectedItem.name}</p>`
    document.querySelector('.content').innerHTML=el
}

// Data has been added here for items
let items = [
    {
        id:1,
        name: "Dumbell 10 KG",
        price: "$19.99",
        imageUrl: "images/dumbellBackground.png",
        rating:4.5,
        description:"Ullamco velit aliquip exercitation eu consequat do sint. Ut velit ipsum voluptate culpa enim. Occaecat cupidatat id fugiat nulla exercitation id pariatur minim et ea laborum proident dolore. Sunt incididunt fugiat voluptate occaecat fugiat deserunt deserunt cillum est mollit irure. Labore sit labore quis occaecat nisi esse sunt irure. Ullamco ipsum ullamco occaecat exercitation.",
        reserved:false,
    },
    {
        id:2,
        name: "kettlebell 8 KG",
        price: "$9.99",
        imageUrl: "images/kettlebellBackground.png",
        rating:4.1,
        description:"Ullamco velit aliquip exercitation eu consequat do sint. Ut velit ipsum voluptate culpa enim. Occaecat cupidatat id fugiat nulla exercitation id pariatur minim et ea laborum proident dolore. Sunt incididunt fugiat voluptate occaecat fugiat deserunt deserunt cillum est mollit irure. Labore sit labore quis occaecat nisi esse sunt irure. Ullamco ipsum ullamco occaecat exercitation.",
        reserved:false,
    },
    {
        id:3,
        name: "Dumbell 10 KG",
        price: "$19.99",
        imageUrl: "images/dumbellBackground.png",
        rating:4.8,
        description:"Ullamco velit aliquip exercitation eu consequat do sint. Ut velit ipsum voluptate culpa enim. Occaecat cupidatat id fugiat nulla exercitation id pariatur minim et ea laborum proident dolore. Sunt incididunt fugiat voluptate occaecat fugiat deserunt deserunt cillum est mollit irure. Labore sit labore quis occaecat nisi esse sunt irure. Ullamco ipsum ullamco occaecat exercitation.",
        reserved:false,
    },
    {
        id:4,
        name: "kettlebell 8 KG",
        price: "$9.99",
        imageUrl: "images/kettlebellBackground.png",
        rating:4.2,
        description:"Ullamco velit aliquip exercitation eu consequat do sint. Ut velit ipsum voluptate culpa enim. Occaecat cupidatat id fugiat nulla exercitation id pariatur minim et ea laborum proident dolore. Sunt incididunt fugiat voluptate occaecat fugiat deserunt deserunt cillum est mollit irure. Labore sit labore quis occaecat nisi esse sunt irure. Ullamco ipsum ullamco occaecat exercitation.",
        reserved:false,
    }
];

// Function to load all data to home page
function loadData(){
    items.forEach(createItem)
}

// Function to create item and place inside the items container
function createItem(item){
    var el = 
    `<div class="item">
        <img class="itemImage" src="${item.imageUrl}" alt="Product Image">
        <div class="itemDescription">
            <h3 class="itemName">${item.name}</h3>
            <h1 class="itemPrice">${item.price}</h1>
            <button class="itemButton" onClick="viewDescription(${item.id})">View Details</button>
        </div>
    </div>`
document.querySelector('.items').innerHTML+=el
}

// Function to search the required product
function search(){
    var searchString = event.target.value
    document.querySelectorAll('.items .item').forEach((item)=>{
        item.classList.remove('displayNone')
        if(item.innerText.toLowerCase().indexOf(searchString.toLowerCase()) == -1){
            item.classList.add('displayNone')
        }
    })
}

// Function to view the description of the particular item
function viewDescription(itemId){
    const selectedItem = items.find(item => item.id === itemId)
    console.log(selectedItem) 
    let reserveValue = "Reserve";
    if(viewDescription.caller.name == "onclick"){
        document.querySelector('.items').classList.add('displayNone')
    }
    if(selectedItem.reserved){
        reserveValue="Reserved"
    }  
    var el =
    `<div class="wrapper">
        <div class="product-img">
            <img src="images/dumbellBackground.png" height="100%" width="100%">
        </div>
        <div class="product-info">
            <div class="product-text">
                <h1>${selectedItem.name}</h1>
                <h2>Rating ${selectedItem.rating}</h2>
                <p>${selectedItem.description}</p>
            </div>
        <div class="product-price-btn">
            <p><span>${selectedItem.price}</span></p>
            <button class="itemButton" id="referenceCancelButton" onclick="goBack()">Go Back</button>
            <button class="itemButton" onclick="reserveItem(${selectedItem.id})">${reserveValue}</button>
        </div>
    </div>`
    document.querySelector('.content').innerHTML=el
}

// Function to open the reserve form for the particular item
function reserveItem(itemId){
    const selectedItem = items.find(item => item.id === itemId)
    if(selectedItem.reserved){
        return
    }
    document.querySelector('.wrapper').classList.add('displayNone')
    var el =
    `<div class="reserveForm">
        <div class="formContainer">
            <h1>Fill the details</h1>
            <form action="#" method="post" onsubmit="return submitReserve(${selectedItem.id});">
                <div class="inputField">
                    <label for="fname">Full Name:</label>
                    <input type="text" id="fname" name="fname" required>
                </div>
                <div class="inputField">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" title="Please enter a 10-digit mobile number" required>
                </div>
                <div class="inputField">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="inputField">
                    <label for="address">Address:</label>
                    <textarea id="address" name="address"></textarea>
                </div>
                <div class="inputField" id="referenceButtonContainer">
                    <input type="submit" class="itemButton" id="referenceSubmitButton" value="Submit">
                    <input onclick="cancelReserve(${selectedItem.id})" type="submit" class="itemButton" id="referenceCancelButton" value="Cancel">
                </div>
            </form>
        </div>
    </div>`
    document.querySelector('.content').innerHTML=el
                                 
}

// Function to go back to home page
function goBack(){
    document.querySelector('.wrapper').classList.add('displayNone')
    const itemDiv = document.createElement('div')
    itemDiv.className='items'
    document.querySelector('.content').appendChild(itemDiv)
    loadData();
}

// Fucntion to submit the form and make the item reserved
function submitReserve(itemId){
    const selectedIndex = items.findIndex(item => item.id === itemId)
    items[selectedIndex].reserved = true
    document.querySelector('.reserveForm').classList.add('displayNone')
    viewDescription(items[selectedIndex].id)
}

// Function to cancel the reserve form and go back to product description page
function cancelReserve(itemId){
    const selectedItem = items.find(item => item.id === itemId)
    document.querySelector('.reserveForm').classList.add('displayNone')
    viewDescription(selectedItem.id)
}

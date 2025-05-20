



const mainDiv=document.getElementById('main')
function fetchData (url)
{
    const url='https://dummyjson.com/products'
    fetch(url)
      .then((res) => res.json())
      .then((data)=>displayData(data))
      .catch((err)=>console.log(err))
}
fetchData('url');

function displayData((data)
   {
    console.log(data);
    data.products.fetch((p) =>
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')
        const productImage = document.createElement('img');
        productImage.src = p.thumbnail;
        productImage.alt = p.title;
        const productTitle = document.createElement('h2');
        productTitle.textContent = p.title;
        const productPrice = document.createElement('p');
        productPrice.textContent = p.price;
        const productButton = document.createElement('button');
        productButton.textContent = "add to cart";
        productDiv.append(productImage,productTitle,productPrice,productButton);
        mainDiv.appendChild(productDiv)
 
    })    
})

/*fetch('https://dummyjson.com/products')
   .then(function(res)
   {
    console.log(res);
    return res.json()
   })
   .then(function(data)
   {
    console.log(data);
   })
   .catch(function (err)
    {
    console.log(err);
    })*/
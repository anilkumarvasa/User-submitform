const mainDiv= document.getElementById('main')
function fetchData (url)
{
    fetch(url)
        .then((res) => res.json())
        .then((data)=>displayData(data))
        .catch((err) => console.log(err))
}
fetchData("https://dummyjson.com/products")
function displayData (data)
{
    console.log(data.products);
    data.products.forEach((p) =>
    {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product')
        const productImage = document.createElement('img');
        productImage.src = p.thumbnail;
        productImage.alt = p.title;
        const productTitle = document.createElement('h2');
        productTitle.textContent = p.title;
        const productPrice = document.createElement('p');
        productPrice.textContent=p.price
        const productButton = document.createElement('button');
        productButton.textContent = "add to cart";
        productDiv.append(productImage, productTitle, productPrice, productButton);
        mainDiv.appendChild(productDiv)
  })   
}
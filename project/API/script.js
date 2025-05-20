    fetch("https://All-in-One-Weather-API.proxy-production.allthingsdev.co/'https://dev-4nh5opbzqpjlj9u.api.raw-labs.com/dv/catalog/products?product_id=YOUR_PRODUCT_ID'v1/current.json?q=London")
    .then(function (res)
    {
        console.log(res)
        return res.json()
    })
    .then(function(data)
    {
      console.log(data)
      document.getElementById("name").textContent=data.name
      document.getElementById("description").textContent=data.description
      document.getElementById("price").textContent=data.price
    })   
    .catch(function (err) 
    {
        console.log(err)
     })
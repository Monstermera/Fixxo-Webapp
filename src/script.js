const getData = async () => {
    const result = await fetch('http://localhost:5000/api/products')
    const data = await result.json()

console.log(data)
}

getData()
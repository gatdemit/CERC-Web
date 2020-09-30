const nama="Muhammad Riziq Yahya";
const Link=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(res=>{
            console.log(nama);
            const data = res.data.filter(value=>{
                return value.userId == 8
            })
            console.log(data);
            })
}

Link();
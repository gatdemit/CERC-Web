const nama="Muhammad Riziq Yahya";
const Link=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
        .then(res=>{
            console.log(nama);
            console.log(res.data.length);
            for(let i =0; i<res.data.length;i++){
                const comment=res.data[i];
                console.log(`${i+1}. ${comment.body}`);
            }
        })
}

Link();
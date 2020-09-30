const changeInput = text => {
    console.log(text.value);
}
const submitInput = () => {
    const getData =document.getElementById('testes').value;
    console.log(getData);
}

const LinkData=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            const filterData = res.data.filter(value=>{
                return value.userId == 1;
                })
                console.log(filterData);
            })
}

LinkData();
function app(...arr){
    let res=arr.map((a)=>a.toUpperCase()+"!");
    console.log(res);

}
app("hello", "world", "abc");
app("xyz", "abc");
function fun(...arr){
    let x=arr.find((a)=>a.includes("o"));
    console.log(x);

}
fun("hello", "world", "abc", "defghi");
fun("xyz", "foo", "bar");
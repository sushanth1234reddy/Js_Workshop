function fill(...arr){
    let fin=arr.filter((a)=> a.length>5);
    console.log(fin);

}
fill("hello", "world", "abc", "defghi");
fill("xyz", "abcdef");
function sunstring(...arr){
    let res=arr.map((a)=> a.substring(0,3));
    console.log(res)

}
sunstring("hello", "world", "abc");
sunstring("xyz", "abcdef");
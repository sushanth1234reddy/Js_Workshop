function rep(...arr){
    let res=arr.map((a)=> a.replaceAll("o","0"));
    console.log(res);

}
rep("hello", "world", "abc");
rep("xyz", "foo", "bar");
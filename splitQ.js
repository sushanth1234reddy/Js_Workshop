function spli(...arr){
    let res=[];
    for(i of arr){
        res.push(i.split("-"));

    }
   let fin=res.flat();
   console.log(fin)
    

}
spli("hello-world", "abc-def");
spli("xyz-abc-def");
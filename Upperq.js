// let arr=["hello", "world", "abc"];
// let result=arr.map((a)=> a.toUpperCase());
// console.log(result);

// let arr1=["xyz", "abc", "def"];
// let result1=arr1.map((a)=> a.toUpperCase());
// console.log(result1);

function upp(...arr){
    let result=arr.map((a)=> a.toUpperCase());
    console.log(result);

}
upp("hello", "world", "abc");
upp("xyz", "abc", "def");
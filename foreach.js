//  forEach is use to find any specific value
 let arr=[1,2,3,4,5];
arr.forEach(function(el){
    console.log(el)
});
let arr2=[4,2,5,7,1];
arr.forEach((el)=>{
    console.log(el);
});
let arr3=[
    {
        name:"manish",
        mark:87,

    },
    {
        name:"rahul",
        mark:77,
        
    },
    {
        name:"sandeep",
        mark:97,
        
    },
];
arr3.forEach((student)=>{
    // console.log(student);
    console.log(student.mark);
});
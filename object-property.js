const students=[
    {id:21, name:'amin'},
    {id:31, name:'kamin'},
    {id:41, name:'chamin'},
    {id:51, name:'ramin'}
];
// const arr=[];
// for(let i=0; i<students.length; i++){
//     const element= students[i];
//     const nam= element.name;
//     arr.push(nam);
// }
const arr=students.filter(s=>{
    //s.id>40
    return (s.id>40);
});
console.log(arr);

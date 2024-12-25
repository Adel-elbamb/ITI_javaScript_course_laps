function objHandle (obj) {
    
var arrobj = Object.keys(obj)

for(var i = 0 ; i < arrobj.length ; i++) {
 var arrvaleu = `${arrobj[i] } : ${obj[arrobj[i]]}}`;
    return arrvaleu
}
 }


 const obj2 = {
    name: 'Adel',
    age: 22,
    profession: 'Developer',
    obj2 : {
     stdName : "Ramadan" ,
     age : '12'
    }}

console.log(obj2)
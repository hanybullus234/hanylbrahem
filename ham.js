
let btn = document.querySelector("button");
window.onscroll = function(){
    if (window.scrollY >= 600){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";

    
    }
};
//
window.localStorage.setItem("color","red");

console.log( window.localStorage);
console.log(typeof window.localStorage);
window.localStorage.fontweght="bold";
window.localStorage.removeItem("color");
//
/*let lis = document.querySelectorAll("ul  li");
lis.forEach((li)=>{
li.addEventListener(("click",ce)>={
    lis :forEach(()=>{
        classlistremove("active");
    })
});
e.currentTarget.classlist.add("active");

});
*/

//
/*window.localStorage.setItem("color","red");
window.sessionStorage.setItem("color","red");
document.querySelector(".name"),onblur=function(

    window.localStorage.setItem("input-name".this,value);
);*/
/*let book="video";
let video="book";

console.log(book);
console.log(video);

const user={
    theName:"hany",
    theAge:12,
    theTitel:"Developer",
    thecoutry:"Egypt",
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitel);
console.log(user.thecoutry);
//*/
/*const user={
    theName:"hany",
    theAge:12,
    skills:["html","css","javascript"],
    addresses:{
        home:"cairo",
        office:"Alexandria",

    },
},
const{
    theName:n,
    theAge:a,
    skills:[one,tow,three],
    addresses:{home:c},
},
//*/

/*let myData=[1,1,1,2,3,];
let myuniqueData = new Set();
console.log(myData);
console.log(myuniqueData);

myuniqueData.add(1).add(1).add(1);
myuniqueData.add(3).add("A");
console.log(`Is set
    Has=>A${myuniqueData.has("A")}`);
console.log(myuniqueData);
console.log(myuniqueData[0]);

myuniqueData.delete(2);

console.log(myuniqueData);
console.log(myuniqueData.Size);
*/
/*let my=new Set([2]);

console.log(mySet);
console.log(`size of element ${mySet}`);
console.log("#".repeat(20));
*/
//
/*let myMap=new Map([
    [10,"Number"],
    ["Name","string"],
    [false,"Boolean"],
]);
console.log(myMap);
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));
console.log("#########");
console.log(myMap.size);
console.log(myMap.delete("Name"));
console.log(myMap.size);
*////*
/*let mapuser={theName:"hani"};
let myMap=new Map();
myMap.set(mapuser,"object value");
console.log(myMap);
*/
//*/
/*const locationions={
    20:"place 1",
    30:"place 2",
    18:"place 3",
    40:"place 4",
};
let mainlocation=15;
let locationArray=Object.keys(location);
console.log(locationArray);
let locationArrayNumbers=locationArray.map((n)=> +n);
console.log(locationArrayNumbers);
let chak=locationArrayNumbers.every(function(e){
    return e>this
},mainlocation);
console.log(chak);*/
//*/
/*console.log(..."hany");
let myArray1=[1,2,3];
let myArray2=[4,5,6];
let all=[...myArray1,...myArray2];
console.log(all);
*/
//*/
/*let mystring="Hello my frind my name hany web diverpar";
let regex=/Hello/ig;
console.log(mystring.match(regex));
*/
//*/
/*let tld="com Net org code lo";
let hanu=/(org|com|Net)/ig;
console.log(tld.match(hanu));
*/
//*/
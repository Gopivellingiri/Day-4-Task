
//How to compare two JSON
var obj1 = {
  "name" : "person 1",
  "age"   : "5"
}
var obj2 = {
  "age" : "5",
  "name" : "person 1"
}
var flag = true;
if(Object.keys(obj1).length == Object.keys(obj2).length){
  for(key in obj1){
    if (obj1[key] == obj2[key]){
        continue;
    } else{
      flag=false;
      break
    }
  }
} else {
  flag=false;
} 
console.log("object equal is"+ " "+flag);

//Flags png links
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",)
request.send();
request.onload = function(){
  var data = request.response
  var result = JSON.parse(data)

  for(var i = 0; i < result.length; i++){
    console.log(`This is the country flag ${result[i].flags.png}`)
    console.log(`Country Name is ${result[i].name.common} and region is ${result[i].region}, subregion : ${result[i].subregion}, total population of this country : ${result[i].population}`)
  }
}


function AddNewField(object, field, value) {
    if(!object[field]){
        object[field] = value;
    }
}
let Person = {};
console.log(Person);
AddNewField(Person, 'age', 18);
console.log(Person);
AddNewField(Person, 'age', 19);
console.log(Person);
AddNewField(Person, 'language', "C++");
for(var key in Person) {
    console.log("Ключ: " + key + ", значення: " + Person[key]);
}
Object.keys(Person).forEach(function(key,index) {
    console.log("Ключ: " + key + ", значення: " + Person[key]);
});
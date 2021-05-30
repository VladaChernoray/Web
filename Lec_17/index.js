let gallery = [
    {
    "src" : "https://th.bing.com/th/id/R4032d716216ae4f8de63cdb35e3f3539?rik=36IUsmAd62jSxw&pid=ImgRaw" ,
    "name" : "first",
    "date" : new Date()
    },
    {
        "src" : "https://th.bing.com/th/id/R43a09e2416a2a0dca6fa71d5f2792170?rik=evrYhb0XmdLYHg&riu=http%3a%2f%2fjuliawinkler.com%2fwp-content%2fuploads%2f2013%2f07%2fwpid3765-Sunset-Love-Julia-Winkler-Photography-1.jpg&ehk=SxX9BPoxKBnlK%2boC0QlAwpsaeSVkJUdw9gKojkeiIrc%3d&risl=&pid=ImgRaw" ,
        "name" : "second",
        "date" : new Date()
    },
    {
        "src" : "https://ripost.hu/wp-content/uploads/2020/03/69950272l-scaled.jpg" ,
        "name" : "third",
        "date" : new Date()
    }
]
console.log(gallery);
let text1 = JSON.stringify(gallery);
console.log(text1);
let text2 = JSON.stringify(gallery, ["name"]);
console.log(text2);
let text3 = JSON.stringify(gallery, function(key, value) {
    if (this.name == "") return undefined;
    return value;
});
console.log(text3);
let g1 = JSON.parse(text1);
let g2 = JSON.parse(text2);
let g3 = JSON.parse(text3);
function print(g) {
    for (let i = 0; i < g.length; i++) {
        console.log(g[i].name + g[i].src + new Date(Date.parse(g[i].date)));
    }
}
print(g1);
print(g2);
print(g3);
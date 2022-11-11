// console.log('yerrrrrrr')
const addElement = () => {
    const newEle = document.createElement("h1");
    newEle.innerText = "David Chu";
    document.body.appendChild(newEle);

    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.innerText = "I grew up in Canada";
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.innerText =  "I am half Vietnamese and half Chinese";
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.innerText = "I play way too many videogames";
    ul.appendChild(li3);

    const li4 = document.createElement("li");
    li4.innerText = "I love Pepsi";
    ul.appendChild(li4);

    document.body.appendChild(ul);
}
window.onload = addElement;

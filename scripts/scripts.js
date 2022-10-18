// navigaciis java

const nav=["home", "about", "gallery", "contact"]

const link=["index.html", "about.html", "gallery.html", "contact.html"]

let navigaciatext="<ul>";
for(let i=0; i<nav.length; i++){
    navigaciatext+= '<li><a href="'+ link[i] + '">' + nav[i]+"</a></li";

    console.log(navigaciatext)
}

document.getElementById("navig").innerHTML = navigaciatext;
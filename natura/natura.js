function anteba(){
    document.getElementById("natura").src = "img/turn-on.png";
}

function chakroba(){
    document.getElementById("natura").src = "img/turn-off.png";
}


function antebachakroba(){
    let suratismisamarti = document.getElementById("natura").src;

    console.log(suratismisamarti);

    if(suratismisamarti == "file:///C:/Users/User/Desktop/salome%20tabidze/%E1%83%93%E1%83%90%E1%83%95%E1%83%90%E1%83%9A%E1%83%94%E1%83%91%E1%83%94%E1%83%91%E1%83%98/%E1%83%9B%E1%83%94-11%20%E1%83%93%E1%83%90%E1%83%95%E1%83%90%E1%83%9A%E1%83%94%E1%83%91%E1%83%90/img/turn-off.png"){
        document.getElementById("natura").src = "img/turn-on.png";
        document.getElementById("universal").innerHTML = "ჩაქრობა";
    }
    else{
        document.getElementById("natura").src = "img/turn-off.png";
        document.getElementById("universal").innerHTML = "ანთება";
    }


}
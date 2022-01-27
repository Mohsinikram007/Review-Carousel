//let imge = document.getElementById("pic").src ="/Users/mohsinikram/Downloads/frontend_Task/ReviewCrasoul/";
let n = document.getElementById("name");
let desi = document.getElementById("des");
let detail = document.getElementById("details");


var obj=[
    {img: "1.jpg", name:"Mohsin",des:"Web Developer", details: " 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus?  1Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus?"},
     {img: "2.jpg", name:"Talha",des:"App Developer", details: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus? 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus?"},
     {img: "3.jpg", name:"Hassan",des:"Desktop Developer", details: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus? 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus?"},
     {img: "4.jpg", name:"Dawaood",des:"IOS Developer", details: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus? 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus?"},
     {img: "5.jpg", name:"Yousaf",des:"WordPress Developer", details: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus? 1Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia iure nobis saepe assumenda quibusdam magnam accusantium non tempore sed, eum suscipit fugiat, voluptatem unde vitae fuga laboriosam. Eum, necessitatibus?"}
]


window.addEventListener('load', () => {
    var data = obj[Math.floor(Math.random() * obj.length)]
    //alert("hello")
    n.innerHTML = data.name;
    var x =   data.img 
    document.querySelector("img").src = x
    desi.innerHTML=data.des;
     detail.innerHTML = data.details;

  });


function back()
{
    
    var data = obj[Math.floor(Math.random() * obj.length)]
    //alert("hello")
    n.innerHTML = data.name;
    var x =   data.img 
    document.querySelector("img").src = x
    desi.innerHTML=data.des;
     detail.innerHTML = data.details;
}



function next()
{
    var data = obj[Math.floor(Math.random() * obj.length)]
    //alert("hello")
    n.innerHTML = data.name;
    var x =   data.img 
    document.querySelector("img").src = x
    desi.innerHTML=data.des;
     detail.innerHTML = data.details;
}



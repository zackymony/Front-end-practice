const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayname=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */

/* Looping through images */
for (picname of arrayname) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/'+picname);
    console.log(picname
    );
    newImage.setAttribute('alt', picname);
    newImage.addEventListener("click", e=>{
        displayedImage.setAttribute("src",e.target.src);
    })
    thumbBar.appendChild(newImage);

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",function (e){
    let cname=btn.getAttribute("class");
    if (cname==="dark"){
        btn.setAttribute('class', "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else if(cname==="light"){
        btn.setAttribute('class', "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
})


window.onload = function () {
    // Array of Images
    var backgroundImg = ["img/FirstPage3.jpg",
        "img/FirstPage2.jpg",
        "img/FirstPage1.jpg"
    ];

    document.getElementById("topmotto").style.color="white"
    document.getElementById("firstpageimg").src = backgroundImg[0];
    var i = 0;

    // Change image functions
    function changeImage() {
        i = (i+1)%3;

        document.getElementById("firstpageimg").src = backgroundImg[i];
        if(i==1){
            document.getElementById("topmotto").style.color="black";
        }
        else{
            document.getElementById("topmotto").style.color="white"
        }
    }

    // Timer
    setInterval(changeImage, 5000);
}
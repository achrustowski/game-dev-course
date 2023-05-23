window.addEventListener("load", function () {
    //creating variable for canvas element
    const canvas = document.getElementById("canvas1");
    //accessing built-in object that holds all canvas properties and drawing methods
    const ctx = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    class Player {}

    class Game {
        constructor(canvas) {
            //converting canvas to class property
            this.canvas = canvas;
            this.width = this.canvas.width;
            this.height = this.canvas.height;
        }
    }

    //animation loop to draw and animate the game over and over
    function animate() {}
});

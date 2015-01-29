function Whirl (element, density) {
    this.container = element;
    this.density = density;
    this.init = function () {
        var rotationAngle = 360 / this.density;
        for(var i = 0, len = this.density; i <len; i++) {
            var div =document.createElement('div');
            div.className = 'rectangle';
            div.style.transform = 'rotate(' + i * rotationAngle + 'deg)';
            this.container.appendChild(div);
        }
    }
}



document.addEventListener('DOMContentLoaded',function () {

    var container = document.querySelector('#container');

    var whirl01 = new Whirl(container,20);

    container.addEventListener('click',function () {
        this.classList.toggle('apply_animation');
    });

});
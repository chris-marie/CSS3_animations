




function Whirl (element, density,color,position) {
    this.container = element;
    this.density = density;
    this.color = color; //? 'underfined' : 'rgba(0,0,255,0.5)';
    this.position = {   // and array [top,left]
        left: position[0],
        top: position[1]
    };
    function init (w) {
        var rotationAngle = 360 / this.density;
        console.log(rotationAngle);
        for(var i = 0, len = w.density; i <len; i++) {
            var div = document.createElement('div');
            div.className = 'rectangle';
            div.style.transform = 'rotate(' + i * rotationAngle + 'deg)';
            div.style.backgroundColor = w.color;
            w.container.appendChild(div);
        }
        w.container.style.left = w.position.left;
        w.container.style.top = w.position.top;

        w.container.addEventListener('click',function () {
            this.classList.toggle('apply_animation');
        });
    }
    init(this);
}


Whirl.prototype.move = function () {
    console.log('moving');
};

document.addEventListener('DOMContentLoaded',function () {
    var container = document.querySelector('.container');

    var whirl1 = new Whirl(container,20,'rgba(255,0,0,0.3)',['1px','5px']);
    whirl1.init();

    var container2 = document.createElement('div');
    container2.className = 'container';


    var whirl2 = new Whirl(container2,20,'rgba(0,0,255,0.3)',['100px','50px']);
    whirl2.init();
    document.body.appendChild(container2);


});
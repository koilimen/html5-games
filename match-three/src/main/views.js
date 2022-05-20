import { EventBus } from "./util";

export class Canvas {
    constructor(width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        const body = document.querySelector('body');
        body.appendChild(this.canvas);
        this.ctx2d = this.canvas.getContext('2d');
        this.eventBUs = new EventBus();
        const self = this;
        this.canvas.addEventListener('click', function (evt) {
            self.eventBUs.trigger('click', evt);
        })
    }

    add(object) {
        if (object.render) {
            object.render(this.ctx2d);
        } else {
            console.error("Object has no render method")
        }
        object.setEventBus(this.eventBUs);
    }
}

export class Ball {
    /**
     * 
     * @param {COLORS} color 
     * @param {Radius in pixels} size 
     */
    constructor(color, size, position) {
        this.color = color;
        this.size = size;
        this.position = position;
    }

    render(context) {
        context.fillStyle = this.color;
        context.arc(this.position.x, this.position.y, this.size, 0, 2 * Math.PI);
        context.fill();
    }

    setEventBus(eventBus) {
        eventBus.on('click', this.onClick.bind(this));
    }

    onClick(evt) {
        if (evt.clientX < this.position.x + this.size
            && evt.clientX > this.position.x - this.size
            && evt.clientY < this.position.y + this.size
            && evt.clientY > this.position.y - this.size)
            console.log("Ball", evt);
    }

}

export const COLORS = {
    RED: "rgb(255,0,0)",
    GREEN: "rgb(0,255,0)",
    BLUE: "rgb(0,0,255)"
}
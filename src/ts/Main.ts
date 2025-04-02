import {settings} from "./settings";
import {randomInt} from "./framework25/helpers/random";
import {FallingObstacle} from "./FallingObstacle";
import {Animation} from "./framework25/Animation";
import {isPointInCircle} from "./framework25/helpers/collision";

class Main {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private readonly hue: number;
    private fallingObstacles: FallingObstacle[] = [];
    private animation: Animation;

    constructor() {
        this.canvas = document.getElementById(settings.canvasID) as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.hue = randomInt(1, 360);
        this.addEventListeners();
        this.resizeCanvas();
        this.addFallingObstacles();
        this.animation = new Animation(this.ctx, this.canvas, this.fallingObstacles);
        this.animation.start();
    }

    private resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    private addEventListeners() {
        window.addEventListener("resize", () => {
            this.resizeCanvas();
        });

        this.canvas.addEventListener('click', (e) => {
            for (const fallingObstacle of this.fallingObstacles) {
                if (isPointInCircle({x: e.clientX, y: e.clientY}, {x: fallingObstacle.position.x,y: fallingObstacle.position.y}, fallingObstacle.radius))
                    fallingObstacle.color = settings.redColor;
            }
        });
    }

    private addFallingObstacles() {
        for (let i = 0; i < settings.maxFallingObstacles; i++) {
            this.fallingObstacles.push(new FallingObstacle(this.ctx, this.canvas, this.hue));
        }
    }
}

new Main();
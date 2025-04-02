import {FallingObstacle} from "../FallingObstacle";

export class Animation {
    private ctx: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    private fallingObstacles: FallingObstacle[];


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, fallingObstacles: FallingObstacle[] = []) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.fallingObstacles = fallingObstacles;
    }

    start() {
        this.animate();
    }

    registerFallingObstacle(obstacle:FallingObstacle) {
        this.fallingObstacles.push(obstacle);
    }

    private animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const fallingObstacle of this.fallingObstacles) {
            fallingObstacle.animate();
        }

        requestAnimationFrame(this.animate.bind(this));

    }
}
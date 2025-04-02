import {iPosition} from "../types/iPosition";

export function isPointInCircle(positionA: iPosition, positionB: iPosition, radius:number):boolean {
    return Math.sqrt(Math.pow(positionA.x - positionB.x, 2) + Math.pow(positionA.y - positionB.y, 2)) < radius;
}
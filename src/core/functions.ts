import { RIM_WORLD } from "../RimWorld.js";
import { GameObject } from "./objects/GameObject.js";

export function spawnGameObject (gameObject: GameObject) {
    RIM_WORLD.objects.push(gameObject);
}

export function rand (min = 0, max = 0) : number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function clamp (input = 0, min = 0, max = 0) : number {
    return Math.min(Math.max(input, min), max);
}

export function setPaused (paused = true) {
    RIM_WORLD.paused = paused;
}

export function smoothFloat (input = 0, target = 0, speed = 0.1) {
    return input + (target - input) * speed;
}

export function playSound (sound: string) {
    RIM_WORLD.sounds[sound].play();
}
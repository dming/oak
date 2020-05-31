

//todo: 封装成一个loop类，只有当上一帧完成以后才可执行下一帧。

let lastTime = 0;
const frameTime: number = 1000 / 60;

export function requestAnimationFrame(callback: Function, element) {
    var currTime = Date.now();
    var timeToCall = Math.max(0, frameTime - (currTime - lastTime));
    var id = window.setTimeout(function () { callback(currTime + timeToCall); },
        timeToCall);
    lastTime = currTime + timeToCall;
    return id;
}

export function cancelAnimationFrame(id: number) {
    clearTimeout(id);
}

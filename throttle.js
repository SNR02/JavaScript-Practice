function throttle(func, interval){
    let timer;
    return function(...args){
        if(timer) return;
        timer = setTimeout(() => {
            func.apply(this, args);
            timer=null;
        }, interval);
    }
}

let a = throttle(dummy, 300);
a();
setTimeout(a, 200);

function dummy() {
    console.log("Yes")
}

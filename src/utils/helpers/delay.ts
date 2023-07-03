export function delay(sec: number) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({});
        }, (sec * 1000));
    });
}
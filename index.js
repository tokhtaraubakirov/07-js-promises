//first part

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

//second part

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//The answer: the alert will show 1, because you cannot overwrite resolve

let newPromise = new Promise((resolve, reject) => {
    resolve('resolve')
    reject('reject')
})

newPromise.then(data => console.log(data)).catch(data => console.log(data))
//Не эквивалентны
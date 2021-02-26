function promise_function() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 2000);
    });
}

function waiting_function() {
    var return_val = await promise_function();
    console.log(return_val);
}

waiting_function();
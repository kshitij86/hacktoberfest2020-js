const doALongRunningTask = () =>
    new Promise(resolve => {
        console.log('Starting a long running task...')
        // Simulate a time consuming task
        let sum = 1
        for (let i = 1; i < 9999999999; i++) {
            sum += i
        }
        // resolve the promise
        resolve(sum)
    })

// call the long running task and print it once it is resolved
doALongRunningTask()
    .then(result => console.log(`Result is: ${result}`))
    .catch(error => console.error(`An Error occured: ${error}`))

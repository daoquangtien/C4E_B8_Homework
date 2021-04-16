// Đếm ngược

let countAction
let timeStop

// Start
let startCount = document.getElementById("start")


startCount.onclick = function() {

    let userInput = document.getElementById("countDownInput").value

    countAction = setInterval(() => {




        //     let resultCount = document.getElementById("result")
        //     resultCount.innerText = userInput--
        //         setTimeout(() => {
        //             clearInterval(countAction)
        //             resultCount.innerText = "Time's up!"
        //             startCount.disabled = false
        //             stopCount.disabled = false
        //         }, 6000);



        let resultCount = document.getElementById("result")
        resultCount.innerText = userInput--
            let x = Number(resultCount.innerText)

        if (x < 0) {
            clearInterval(countAction)
            resultCount.innerText = "Time's up!"
            startCount.disabled = false
            stopCount.disabled = false
        }

    }, 1000)

    startCount.disabled = true
    stopCount.disabled = false

}

// Stop
let stopCount = document.getElementById("stop")

stopCount.onclick = function() {

    clearInterval(countAction)
    let resultCount = document.getElementById("result")

    resultCount.innerText = "Stopped!"
    stopCount.disabled = true
    startCount.disabled = false
}

// Lỗi: Nếu không disable khi ấn lần đầu thì khi ấn start nhiều lần ko stop được nữa.

let resetCount = document.getElementById("reset")

resetCount.onclick = function() {

    clearInterval(countAction)
    stopCount.disabled = false
    startCount.disabled = false
    document.getElementById("countDownInput").value = " "
    document.getElementById("result").innerText = "--"
    document.getElementById("countDownInput").value = "5"
}
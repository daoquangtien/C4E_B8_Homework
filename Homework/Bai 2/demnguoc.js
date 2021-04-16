// Đếm ngược

let countAction

// Start
let startCount = document.getElementById("start")


startCount.onclick = function() {

    let userInput = document.getElementById("countDownInput").value

    countAction = setInterval(() => {

        if (userInput === "") {

            userInput = 6
            let resultCount = document.getElementById("result")
            resultCount.innerText = userInput--

                setTimeout(() => {
                    clearInterval(countAction)
                    resultCount.innerText = "Time's up!"
                    startCount.disabled = false
                    stopCount.disabled = false

                }, 6000);

            // Khi đang chạy mà ấn stop ko dừng mà tiếp tục đếm ngược đủ thời gian

        }

        let resultCount = document.getElementById("result")
        resultCount.innerText = userInput--

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
    document.getElementById("result").innerText = "Start"
}
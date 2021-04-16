// function logArray(arrayParameter) 

//     for (element of arrayParameter) {
//         console.log(element)
//     }
// }
// function dienTicb(a, b) {
//     return a * b;
// }

// let arrNumber = [1, 2, , 3, 4, 5]
// let arrString = ["mot", "hai", "ba", "bon", 'sau']
// let arr = [1, 2, "ba", "bon", "sau", { name: "so thu 7" }]

// logArray(arrNumber)
// logArray(arrString)
// logArray(arr)

// dienTicb(1, 2);

// let x = dienTicb(4, 2)
// console.log(x)

// function pushElementToArry(el1, element) {
//     // arr[arr.length] = element
//     arr = [el1, ...arr, element]
//     return arr;
// }

// let newArrayString = pushElementToArry("arrString", "lavie")
// logArray(newArrayString)


// // Ham tinh S hinh vuong

// function sHinhVuong(a) {
//     return a * a
// }

// let a = sHinhVuong(4)
// console.log(a)

// // Ham kiem tra String khac undefined va khac rong ""

// function stringOrNot(stringA) {
//     if (stringA === undefined || stringA === null || stringA === "") {
//         return false
//     }
//     return true
// }

// stringOrNot("string")

// const myFunction = (canhHinhVuong) => {
//     return canhHinhVuong * canhHinhVuong
// }

// let sHV = myFunction(10)
// console.log(sHV)

// // anonymous
// // setTimeout



setInterval(() => {

    // Làm với ClassName
    let clockHour = document.getElementsByClassName("clock--hour__value");
    clockHour[0].innerText = new Date().getHours();

    let clockMinute = document.getElementsByClassName("bigContent clock--minute__value");
    clockMinute[0].innerText = new Date().getMinutes();

    // Làm với id
    let clockSecond = document.getElementById("second");
    clockSecond.innerText = new Date().getSeconds();

    let clockDay = document.getElementById("day");
    let clockDayNumber = new Date().getDay();


    if (clockDayNumber === 0) {
        clockDay.innerText = "Sun"
    } else if (clockDayNumber === 1) {
        clockDay.innerText = "Mon"
    } else if (clockDayNumber === 2) {
        clockDay.innerText = "Tue"
    } else if (clockDayNumber === 3) {
        clockDay.innerText = "Wed"
    } else if (clockDayNumber === 4) {
        clockDay.innerText = "Thu"
    } else if (clockDayNumber === 5) {
        clockDay.innerText = "Fr"
    } else {
        clockDay.innerText = "Sat"
    }

}, 1000);


//  Định làm dấu : nháy nháy ở giữa mà ko được

// setInterval(() => {

//     let clockSignal = document.getElementById("clock--signal")
//     let evenNumber = new Date().getSeconds()

//     let clockSignalChild = document.createElement("p")
//     clockSignalChild.innerText = ":"


//     if (evenNumber % 2 === 0) {
//         clockSignal.append(clockSignalChild)
//     } else if (evenNumber % 2 !== 0) {
//         clockSignal.removeChild(clockSignalChild)
//     }
// }, 1000)
let count = 0


let sub = document.getElementsByClassName("count--program__subtraction")

sub[0].onclick = function() {

    let numberCount = document.getElementById("number")
    numberCount.innerText = count -= 1
}

let add = document.getElementsByClassName("count--program__addition")

add[0].onclick = function() {

    let numberCount = document.getElementById("number")
    numberCount.innerText = count += 1
}
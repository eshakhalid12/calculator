// for display
function display(num) {
    document.getElementById("inp").value += num;
}

// for clear
function result() {
    var a = document.getElementById("inp").value;
    var b = eval(a);
    document.getElementById("inp").value = b;
}

// for clear
function clr() {
    displayValue = '';
    document.getElementById("inp").value = displayValue;
}

// for delete
function del() {
    var c = document.getElementById("inp").value;
    c = c.slice(0, -1);
    document.getElementById("inp").value = c;

}
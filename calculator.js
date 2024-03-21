function display(n){
    if (result.value === "0") {
        result.value = "";
    }
    result.value+=n;
}
function allClear(){
    result.value=""
}
function backSpace(){
    result.value=result.value.slice(0,-1);
}
function findOut(){
    result.value=eval(result.value);
}

function confirmMsg() {

    let returnVal = false;

    var response = confirm("Do you need to download the CV?");
    if (response) {
        returnVal = true;
    }
    else {
        returnVal = false;
    }
}
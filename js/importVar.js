function getVar(name){
    return getComputedStyle(document.querySelector(':root')).getPropertyValue(name);
}
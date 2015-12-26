var elems = document.getElementsByClassName('KRktze');

Array.prototype.filter.call(elems, function (d, i) {
    return i % 3 == 1;
})
.forEach(function (d) {
    d.style.backgroundColor = 'red';
    // TODO: trigger click separately
    // d.click();
    console.log(d.textContent);
    return;
})

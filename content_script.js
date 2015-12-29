var checked = {},
    members = [
        "plus.google.com/u/0/116687308232450361343/posts",
        "plus.google.com/u/0/104815465208323574550/posts",
        "plus.google.com/u/0/104003652269738791415/posts",
        "plus.google.com/u/0/104194696388777073954/posts",
        "plus.google.com/u/0/106102390858541443310/posts",
        "plus.google.com/u/0/104832409151547328144/posts"
    ];

function checkComments (node) {
    Array.prototype.forEach.call(node, function (d, i) {
        var link = d.getElementsByTagName('a')[0],
            uid = /\d+$/.exec(link.href)[0];
        if (uid && members.filter(function (m) {
            return ~m.indexOf(uid);
        }).length) {
            return d.style.backgroundColor = 'yellow';
        }
        return d.style.display = 'none';
    })
}

document.body.addEventListener('mouseover', function (e) {
    if (e.target && e.target.className == 'Ihwked UB0dDd GcESAf') {
        var elem = e.target.getElementsByClassName('KRktze')[1],
            iid = e.target.dataset.iid,
            numOfMsgs,
            timer;
       
        if (checked[iid]) {
            return;
        }
        elem.style.backgroundColor = 'red';
        numOfMsgs = Math.floor(/\d+/.exec(elem.textContent)[0]);
        // TODO: trigger click separately
        if (numOfMsgs) {
            elem.click();
            checked[iid] = true;
        }

        timer = setInterval(function () {
            var comments = e.target.getElementsByTagName('li');
            if (comments.length == numOfMsgs) {
                checkComments(comments);
                clearInterval(timer);
            }
        }, 500);
    }
});

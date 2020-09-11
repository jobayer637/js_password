
function myTest(str) {
    const sc = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
    const s = /[a-zA-Z]/
    const n = /[0-9]/

    if (sc.test(str) && n.test(str) && s.test(str)) {
        return "strong [" + str.length + "] (-_-) (-_-)"
    } else if ((s.test(str) && n.test(str)) || (sc.test(str) && s.test(str))) {
        return "medium [" + str.length + "]"
    } else if (n.test(str) && sc.test(str)) {
        return "low [" + str.length + "]"
    } else if (n.test(str) || s.test(str) || sc.test(str)) {
        return "very low [" + str.length + "]"
    } else {
        if (str != null) {
            return 'Please Enter a strong password'
        }
    }
}

$("#text").on('click keyup keypress change', function () {
    if ($(this).val().length > 5) {
        $("#show").text(myTest($(this).val()))
    } else {
        $("#show").text('pass at least 6 char [' + $(this).val().length + "]")
    }
})

$("#randomPass").on('click', function () {
    const chars = "!@#$&*01$2dfg34!#56@#789ab@3cdefg!#*&hijk&*012#3l*&$mn012@g3#456f$d!789opq@!rs&*01fg23t*uvw?xyz"
    var string_length = 8;
    var randomstring = '';
    for (var i = 0; i < string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }
    $("#text").val(randomstring)
    $("#show").text(myTest(randomstring))
})
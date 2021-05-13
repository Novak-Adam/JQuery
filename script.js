
$(document).ready(function () {

    // $(selector).click(function () { 

    //  console.log();
    // });

    //$(selector).val(value);
    $("#cenaF").click(function () {
        mn = +$("#kr").val();
        k = +$("#kgZ").val();
        c = k * mn;
        $(this).val(c);
        console.log(mn);
    });
    $(".celkF").click(function () {
        krm = +$("#kr").val();
        mno = +$("#kgZ").val();
        zakKrm = krm * mno;
        c1 = document.form.bio.checked;
        c2 = document.form.prem.checked;
        c3 = document.form.ch.checked;
        c4 = document.form.d.checked;
        c111 = 0; c211 = 0; c311 = 0; c411 = 0;
        if (c1) {
            c11 = +$("#bioZ").val();
            c111 = zakKrm * c11 / 100;
        }
        if (c2) {
            c21 = +$("#premZ").val();
            c211 = zakKrm * c21 / 100;
        }
        if (c3) {
            c31 = +$("#chZ").val();
            c311 = zakKrm * c31 / 100;
        }
        if (c4) {
            c41 = +$("#dZ").val();
            c411 = c41;
        }
        v1 = zakKrm + c111 + c211 + c311 + c411;
        var d = document.getElementsByName("dopr");
        console.log(d);
        d111 = 0; d211 = 0; d311 = 0;
        if (d[0].checked) {
            d111 = 0;
        }
        if (d[1].checked) {
            d21 = +$("#kur").val();
            d211 = v1 * d21 / 100;

        }
        if (d[2].checked) {
            d31 = +$("#cp").val();
            d311 += d31;
        }
        v2 = d111 + d211 + d311;
        v = v1 + v2;
        console.log(v1);
        console.log(v2);
        console.log(v);
        $("#celkemZ").val(v);

    });

    $("#okF").click(function () {
        ok1 = +$("#okZ").val();
        if (ok1 >= v) {
            $("#okZ").val("Mate dost penez");
        } else {
            $("#okZ").val("Mate malo penez");
        }

    });
    $("#emailKontrolaF").click(function () {
        stringVstup = $("#emZ").val();
        znaky = /^[0-9a-zA-Z]+$/;
        if (znaky.test(stringVstup)) {
            alert('Email v poradku');
        } else {
            alert('Spatny znak - zadej email znovu');
        }

    });


});
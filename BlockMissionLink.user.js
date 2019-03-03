// ==UserScript==
// @name         BlockMissionLink
// @namespace    Leitstellenspiel
// @version      1.2
// @description  Verlinke Einsätze im Chat ausblenden
// @author       x_Freya_x
// @include      https://www.leitstellenspiel.de/*
// @exclude      https://www.leitstellenspiel.de/users/sign_up
// @exclude      https://www.leitstellenspiel.de/verband*
// @exclude      https://www.leitstellenspiel.de/alliance_threads*
// @exclude      https://www.leitstellenspiel.de/alliances*
// @exclude      https://www.leitstellenspiel.de/alliance_logfiles*
// @exclude      https://www.leitstellenspiel.de/schoolings*
// @exclude      https://www.leitstellenspiel.de/credits*
// @require      https://code.jquery.com/jquery-3.3.1.js
// @require      https://www.lss-grossverband-nrw.de/myLSS.js
// ==/UserScript==

(() => {
    'use strict';

    var circle = 'width: 20px; height: 20px; border: 1px solid blue; text-align: center; border-radius: 20px;';
    var i;
    var timerId;

    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "https://www.lss-grossverband-nrw.de/myLSS.js";
    // $("head").append(s);

    if ($('#blue_circle').length === 0) {
        $(".nav.navbar-nav.navbar-right").not(".hidden-xs").append('<li><a id="blockchatmission" class="blockchatmission"><div id="blue_circle" style="background-color: rgb(0, 0, 255);' + circle + '"><span id="filter" class="glyphicon glyphicon-fire"></span></div></a></li>');
    }

    if (sessData_get('BML_active') == 'TRUE') {
        $("#blue_circle").css({'background-color':'grey'});
        refreshData_BML();
    } else {
        $("#blue_circle").css({'background-color':'rgb(0, 0, 255)'});
    }

    if (sessData_get('BML_active') == 'TRUE') {
        let timerID = setInterval(refreshData_BML, 10000);
    } else {
        console.log('BML chk active false clr');
        if ((sessData_get('BML_active') == 'FALSE') || (sessData_get('BML_active') == null)) {
            if (typeof timerID !== 'undefined') {
                clearInterval(timerID);
            }
        }
    }

    $("#blockchatmission").click(function() {
        if(sessData_get('BML_active') == 'TRUE'){
            $("#blue_circle").css({'background-color':'rgb(0, 0, 255)'});
            sessData_set('BML_active', 'FALSE');
        } else {
            $("#blue_circle").css({'background-color':'grey'});
            sessData_set('BML_active', 'TRUE');
            refreshData_BML();
            let timerID = setInterval(refreshData_BML, 10000);
        }
    })

})
();

// ==UserScript==
// @name         BlockMissionLink
// @namespace    Leitstellenspiel
// @version      0.3
// @description  Verlinke Einsätze im Chat ausblenden
// @author       x_Freya_x
// @include      https://www.leitstellenspiel.de/*
// @exclude      https://*.leitstellenspiel.de/alliance_thr*
// @exclude      https://*.leitstellenspiel.de/verban*
// ==/UserScript==

(() => {
    'use strict';

    var circle = 'width: 20px; height: 20px; border: 1px solid blue; text-align: center; border-radius: 20px;';
    var i;

    $(".nav.navbar-nav.navbar-right").not(".hidden-xs").append('<li><a id="blockchatmission" class="blockchatmission"><div id="blue_circle" style="background-color: rgb(0, 0, 255);' + circle + '"><span id="filter" class="glyphicon glyphicon-fire"></span></div></a></li>');

    $("#blockchatmission").click(function() {
        if($('#blue_circle').css('background-color') == 'rgb(0, 0, 255)'){
            $("#blue_circle").css({'background-color':'grey'});
        } else {
            $("#blue_circle").css({'background-color':'rgb(0, 0, 255)'});
        }
    })

    function refreshData()
    {
        const x = 10;
        if($('#blue_circle').css('background-color') !== 'rgb(0, 0, 255)'){
            let cl = document.getElementById('mission_chat_messages');
            let cll = cl.children.length;

            for (i = 0; i < cll; i++) {
                let it = cl.children[i];
                let ih = it.innerHTML;
                let ii = ih.indexOf('/missions/');
                if (ii !== -1) {
                        it.style.display = 'none';
                }
            }
        } else {
            let cl = document.getElementById('mission_chat_messages');
            let cll = cl.children.length;

            for (i = 0; i < cll; i++) {
                let it = cl.children[i];
                let ih = it.innerHTML;
                let ii = ih.indexOf('/missions/');
                if (ii !== -1) {
                        it.style.display = '';
                }
            }
        }

        setTimeout(refreshData, x*1000);
    }

    if($('#blue_circle').css('background-color') !== 'rgb(0, 0, 255)'){
        let cl = document.getElementById('mission_chat_messages');
        let cll = cl.children.length;

        for (i = 0; i < cll; i++) {
            let it = cl.children[i];
            let ih = it.innerHTML;
            let ii = ih.indexOf('/missions/');
            if (ii !== -1) {
                it.style.display = 'none';
            }
        }
    } else {
        let cl = document.getElementById('mission_chat_messages');
        let cll = cl.children.length;

        for (i = 0; i < cll; i++) {
            let it = cl.children[i];
            let ih = it.innerHTML;
            let ii = ih.indexOf('/missions/');
            if (ii !== -1) {
                it.style.display = '';
            }
        }
    }

    refreshData();

})
();

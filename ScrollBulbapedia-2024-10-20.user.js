// ==UserScript==
// @name         ScrollBulbapedia
// @namespace    http://tampermonkey.net/
// @version      2024-10-20
// @description  try to take over the world!
// @author       Igorajs
// @match        https://bulbapedia.bulbagarden.net/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bulbagarden.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.scrollDo = function(e){
        const gora = "Numpad1";
        const staty = "Numpad2";
        const ruchy = "Numpad3";
        const stats = document.getElementById("Stats")
        const learnset = document.getElementById("Learnset")
        if(e.code == gora)
            window.scrollTo(0, 0);
        if(e.code == staty)
           stats.scrollIntoView();
        if(e.code == ruchy)
            learnset.scrollIntoView()
    }
     addEventListener("keypress", (event)=>{scrollDo(event)});
})();
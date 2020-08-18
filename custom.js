//Empresa Início
$(function () {
    function typed() {
        // Empresa 1
        setTimeout (function () {
            $("body > div").prepend("<div class='typewriter-to-right'>Atuei na Performance CG.</div>");               
        }, 0)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-right").remove();
            $("body > div").prepend("<div class='typewriter-to-left'>Atuei na Performance CG.</div>");               
        }, 5000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-left").remove();                                    
        }, 6900)
        // Empresa 2
        setTimeout (function () {
            $("body > div").prepend("<div class='typewriter-to-right'>Atuei na Menes Learninsight.</div>");               
        }, 7000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-right").remove();
            $("body > div").prepend("<div class='typewriter-to-left'>Atuei na Menes Learninsight.</div>");               
        }, 12000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-left").remove();                                                        
        }, 13900)
        // Empresa 3
        setTimeout (function () {
            $("body > div").prepend("<div class='typewriter-to-right'>Atuei na Easy System.</div>");               
        }, 14000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-right").remove();
            $("body > div").prepend("<div class='typewriter-to-left'>Atuei na Easy System.</div>");               
        }, 19000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-left").remove();                                                        
        }, 20900)
        // Empresa 4
        setTimeout (function () {
            $("body > div").prepend("<div class='typewriter-to-right'>Atuei no Grupo Tv1.</div>");               
        }, 21000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-right").remove();
            $("body > div").prepend("<div class='typewriter-to-left'>Atuei no Grupo Tv1.</div>");               
        }, 26000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-left").remove();                                                                          
        }, 27900)
        // Empresa 5
        setTimeout (function () {
            $("body > div").prepend("<div class='typewriter-to-right'>Atuei na Wunderman Brasil.</div>");               
        }, 28000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-right").remove();
            $("body > div").prepend("<div class='typewriter-to-left'>Atuei na Wunderman Brasil.</div>");               
        }, 33000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-left").remove();                                                                          
        }, 34900)
        // Empresa 6
        setTimeout (function () {
            $("body > div").prepend("<div class='typewriter-to-right'>Atuei na Agência Moustache.</div>");               
        }, 35000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-right").remove();
            $("body > div").prepend("<div class='typewriter-to-left'>Atuei na Agência Moustache.</div>");               
        }, 40000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-left").remove();                                                                          
        }, 41900)
        // Empresa 7
        setTimeout (function () {
            $("body > div").prepend("<div class='typewriter-to-right'>Atuei no Olhar Digital.</div>");               
        }, 42000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-right").remove();
            $("body > div").prepend("<div class='typewriter-to-left'>Atuei no Olhar Digital.</div>");               
        }, 47000)            
        setTimeout (function () {
            $("body > div > div.typewriter-to-left").remove();
            typed();                                                                          
        }, 48900)
    }
    typed();
})
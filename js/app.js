(function($) {
    "use strict";

    var procDochodu = 35.0;

    var policzBilans = function() {
        var warDochodu = Number( $('#wartoscDochodu').val() );
        var warWyplaty =  warDochodu * procDochodu/100 ;
        var warZysku = warDochodu - warWyplaty;
        $('#wartoscWyplaty').text('$' + warWyplaty.toFixed(2));
        $('#wartoscZysku').text('$' + warZysku.toFixed(2));
    };

    var zapiszUstawienia = function() {
        try {
            var pcDochodu = parseFloat( $('#procentDochodu').val() );
            localStorage.setItem('procentDochodu', pcDochodu);
            procDochodu = pcDochodu;
            window.history.back();
        } catch (ex) {
            alert('Stawka godzinowa musi byæ wartoœci¹ procentow¹');
        }
    };

    $( document ).on( "ready", function(){
        $('#policzBilans').on('click', policzBilans);
        $('#zapiszUstawienia').on('click', zapiszUstawienia);
        var procDochoduUstawienia = localStorage.getItem('procentDochodu');
        if (procDochoduUstawienia) {
            procDochodu = parseFloat(procDochoduUstawienia);
        }
        $('#procentDochodu').val(procDochodu);
    });

    $( document ).on( "deviceready", function(){
        StatusBar.overlaysWebView( false );
        StatusBar.backgroundColorByName("gray");
    });

}
)(jQuery);


(function() {
$('.victory').css({'visibility':'hidden'},{'display':'none'});
var curPlayer = 'green-green'; //start with someone
var slots;
var horizontalSlots;
var counter;
$('.column').on('click', function (e) {
     slots = $(e.currentTarget).find('.slot');   //find the slot that's on the selected column
    //slot is not a direct child of column, thus using the find function
//========who's on====
    for(var i = 5; i>=0; i--) {   //we're itirating through slots as divs on the chosen column
        if(!slots.eq(i).hasClass('green-green') && !slots.eq(i).hasClass('light-green')) {
            slots.eq(i).addClass(curPlayer); //eq converts the itirated divs to jQuery lingo
            break;  //stop the loop
        }
    }
//====================
    checkVerticalVictory(slots);
    checkHorizontalVictory();
    if(curPlayer == 'green-green') {   //change player by assigning new class
        curPlayer = 'light-green';
    } else {
        curPlayer = 'green-green';
    }
});
function checkVerticalVictory(slots) {
    counter = 0;
    for(var i = 0; i<slots.length; i++) {
        console.log("slots",slots, "i:",i);
        if(slots.eq(i).hasClass(curPlayer)) {
            counter++;
            console.log("counter:",counter);
            if (counter == 4) {
                victory(curPlayer);
                break;
            }
        } else {
            counter = 0;
        }
    }
}
    function checkHorizontalVictory(){
                  var columns = $('#board').find('.column');
                     for (var x = columns.length - 1; x >= 0; x--) {
                         var tarRow = ".row" + x;
                         var horSlots = $('#board').find(tarRow);
                         var horStr = '';
                         for (var y = horSlots.length - 1; y >= 0; y--) {
                             if (horSlots.eq(y).hasClass(curPlayer)) {
                                 horStr += 'y';
                             } else {
                                 horStr += 'n';
                             }
                         }
                         if (horStr.indexOf('yyyy') > -1) {
                             console.log('you win');
                             winnar = true;
                             victory(curPlayer);
                         }
    }
  }
 function victory(curPlayer) {
     setTimeout(function() {$('.victoryModal').css(('display', 'block'),500)
         $('body').css('background', 'black');
         // if (curPlayer = green-green) {
         //     $('.victoryModal').css('background-color', '#009688')
         // } else {
         //     $('.victoryModal').css('background-color', '#dcef27')
         // }

    }



 // function showModal() {
 //     $(<h2>CONGRATULATIONS {curPlayer}!!</h2>)
 //
 // }



// function victory(curPlayer) {
//             $('head').append('<link rel='stylesheet' href='victory_css.css' type='text/css'/>');
//             var $orbs = $('.orbs span');
//         $('.end-right').css('left' , '-10%');
//         $('.end-left').css('left', '110%');
//         $orbs.velocity({'top': '-300px', scaleX: '.2', scaleY: '.2', color: '#990000'},0);
//         var orb = 0;
//         var numOrbs = $orbs.length;
//
//         $('.end-right').velocity({left : '52%'}, 'easeOutExpo', 1200);
//         $('.end-left').velocity({left : '41%'}, 'easeOutExpo',  1200);
//
//
//         dropOrbs = function(){
//           $orbs.eq(orb).velocity({top: '70px'}, 400).velocity({scaleX: 1, scaleY: 1, color: '#fff'}, 1000).css('position', 'relative');
//           orb = orb + 1;
//           if(orb < numOrbs){
//             setTimeout(dropOrbs, 100);
//           }
//           else{
//             setTimeout(function(){$('.glow').velocity({opacity: 1}, 1200);}, 1200);
//
//           }
//
//         }
//
//         setTimeout(dropOrbs, 400);
//
//     }
})();

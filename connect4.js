
var curPlayer = 'first'; //start with someone

$('.column').on('click', function (e) {

    var slots = $(e.currentTarget).find('.slot');   //find the slot that's on the selected column
    console.log(slots);      //slot is not a direct child of column, thus using the find function


    for(var i = 5; i>=0; i--) {   //we're itirating through slots as divs on the chosen column
        if(!slots.eq(i).hasClass('first') && !slots.eq(i).hasClass('second')) {
            slots.eq(i).addClass(curPlayer); //eq converts the itirated divs to jQuery lingo
            console.log(curPlayer);
            break;  //stop the loop
        }
    }


    var counter = 0;
    check(slots); //will check vertically
    var row = i;
    counter = 0;
    slots = $('.row' + row); //defines slots as a row array
    check(slots); //will check horizontally



    if(curPlayer == 'first') {   //change player by assigning new class
        curPlayer = 'second';
    } else {
        curPlayer = 'first';
    }


});


function check(slots) {
    for( i = 0; i<slots.length; i++) {
        if(slots.eq(i).hasClass(curPlayer)) {
            counter++;

            if (counter >= 4) {
                alert('winner!');
                break;
            }

        } else {
            counter = 0;

    }
}
}

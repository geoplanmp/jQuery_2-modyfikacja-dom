$(document).ready(function() {
    const button = $('<button>Kliknij</button>');
    $('body').append(button);

    $('button').attr('id', 'main-button');


    const paragraph1 = $('<p id=p1>To jest paragraf numer 1</p>');
    $('body').append(paragraph1);

    const paragraph2 = $('<p id=p2>To jest paragraf numer 2</p>');
    $('body').append(paragraph2);

    const paragraph3 = $('<p id=p3>To jest paragraf numer 3</p>');
    $('body').append(paragraph3);

    const paragraph4 = $('<p id=p4>To jest paragraf numer 4</p>');
    $('body').append(paragraph4);

    const paragraph5 = $('<p id=p5>To jest paragraf numer 5</p>');
    $('body').append(paragraph5);



    $('#main-button').click(function() {
        $('#p5').animate({ bottom: '135px' }, 0001, function() {
            $(this).css({
                backgroundColor: 'yellow',
                transition: '1s',
                position: 'relative',
            });
        });
        $('#p1').animate({ top: '135px' }, 0001, function() {
            $(this).css({
                backgroundColor: 'green',
                transition: '1s',
                position: 'relative',
            });
        });
    });
});
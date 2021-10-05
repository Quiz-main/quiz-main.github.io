$(function(){

    var i = 0;

    //Progress Bar

    var lvlspan = $('span#level');
    var lvlbar = $('div.infos-lvl div.lvl-line');
    var lvlhit = $('span#hit-quantity');

    
    //Quiz level 1

    var falseq1 = $('div.quiz-1 div.alternative-f');
    var corretq1 = $('div.quiz-1 div.alternative-v');
    
    //Quiz level 2

    var falseq2 = $('div.quiz-2 div.alternative-f');
    var corretq2 = $('div.quiz-2 div.alternative-v');

    //Quiz level 3

    var falseq3 = $('div.quiz-3 div.alternative-f');
    var corretq3 = $('div.quiz-3 div.alternative-v');

    //Quiz end

    var buttonr = $('div.quiz-4 div.button-return');
    var endtitle = $('h2#end-title');
    var endscore = $('p#end-score');

    
    falseq1.click(function(){

        lvlspan.text('Level 2');

        lvlhit.text(i + "/3");

        progressBar(3);
        nextLevel(1,2);


        console.log("Wrong!");

    });
    
    corretq1.click(function(){

        lvlspan.text('Level 2');
        i++;
        lvlhit.text(i + "/3");

        progressBar(3);
        nextLevel(1,2);

        

        console.log('Right!');

    });

    falseq2.click(function(){

        lvlspan.text('Level 3');

        lvlhit.text(i + "/3");

        progressBar(2);
        nextLevel(2,3);


        console.log("Wrong!");

    });
    
    corretq2.click(function(){

        lvlspan.text('Level 3');
        i++;
        lvlhit.text(i + "/3");

        progressBar(2);
        nextLevel(2,3);

        console.log('Right!');

    });

    falseq3.click(function(){

        lvlspan.text('End Game')

        nextLevel(3,4);

        if (i >= 2){
            endtitle.text('Win!')
        } else {
            endtitle.text('Loss!')
        }
        progressBar(1);

        lvlhit.css("display", 'none');

        console.log(i);

        endscore.text(i + '/3');
        console.log('Wrong!');

    });
    
    corretq3.click(function(){

        lvlspan.text('End Game')

        nextLevel(3,4);

        if (i >= 1){
            endtitle.text('Win!')
        } else {
            endtitle.text('Loss!')
        }

        progressBar(1);

        i++;
        
        lvlhit.css("display", 'none');

        endscore.text(i + '/3');


        console.log('Right!');

    });

    buttonr.click(function(){

        lvlspan.text('Level 1')

        i = 0;

        lvlhit.css('display','block').text(i + '/3');

        progressBar(0);

        nextLevel(4, 1);

        console.log('Playing Again!');


    });



    function progressBar(lvl){

        if(lvl === 0){
            lvlbar.css('width', '0');
        } else {
            lvlbar.css('width', 'calc( 100% / ' + lvl + ")");
        }

    }

    function nextLevel(current, lvl){

        $('div.quiz-' + current).css('display', 'none');
        $('div.quiz-' + lvl).css('display', 'block');

    }

    



});
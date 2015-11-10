 $(document).ready(function () {
     var b = $(".hej");
     var a = $(".questions");
     var d = $(".subb");
     var res = $(".restart");
     var corr = $(".corr");
     var corrn = $(".corrn");
     var point = $(".points");
     var pointhel = $(".lello");
     var svar = $(".svar");

     var curr = null;
     var i = 0;
     var points = 0;

     pointhel.hide();
     corr.hide();
     res.hide();
     d.hide();
     svar.hide();

     var questions = [
         {
             svar: 'katt',
             fraga: 'vad gillar jag?',
             val: ['katt', 'hund', 'hest']

    },
         {
             svar: 'gustaf',
             fraga: 'vad heter jag?',
             val: ['carl', 'oskar', 'gustaf']

    },
         {
             svar: 'te415',
             fraga: 'vilken klass går jag i?',
             val: ['te12c', 'te415', 'na415']


     },
         {
             svar: 'täby',
             fraga: 'var bor jag?',
             val: ['täby', 'danderyd', 'erikslund']


     },
         {
             svar: '11',
             fraga: 'vad blir 55/5?',
             val: ['9', '11', '13']


     },
         {
             svar: '1000',
             fraga: 'vad blir 10*10*10?',
             val: ['10', '100', '1000']


     }


  ];

     function pong() {
         pointhel.show();
         points += 1;
         point.text(points);

     }

     function pongshow() {
         pointhel.show();
         point.text(points);

     }

     function answer(u) {
         if (u === 1) {
             i += 1;
             pong()
             visa();


             corr.removeClass("alert-warning");
             corr.addClass("alert-success");
             corr.show();
             corrn.text("Rätt!");

             corr.click(function () {
                 corr.hide();
                 if (i == questions.length - 1) {
                     end();

                 }


             });
             $('[class="questions"]').attr("checked", false).trigger("change");








         } else if (u === 0) {


             corr.removeClass("alert-success");
             corr.addClass("alert-warning");
             corr.show();
             corrn.text("Fel!");

             corr.click(function () {
                 corr.hide();
                 if (i == questions.length - 2) {
                     end();

                 }
             });
             $('[class="questions"]').attr("checked", false).trigger("change");




         }

     }




     function setButtonValue(name, text) {
         $('input[name="' + name + '"]').attr("value", text);
     }

     function visa() {
         // d.show();
         b.hide();
         //a.show();
         svar.show();
         c.text(questions[i].fraga);

         // setRadioLabel('radio1', questions[i].val[0]);
         //setRadioLabel('radio2', questions[i].val[1]);
         //setRadioLabel('radio3', questions[i].val[2]);

         setButtonValue('a', questions[i].val[0]);
         setButtonValue('b', questions[i].val[1]);
         setButtonValue('c', questions[i].val[2]);
         // $('input[name="a"]').attr("value",questions[i].val[0]);



         curr = questions[i].svar;

     }



     b.click(function quiz() {

         pongshow();
         visa();

         svar.click(function () {
             var value = $("input[type=submit]:focus").val();
             //$('input[type="submit"][clicked="true"]').val();

             // c.text(value);
             if (i <= questions.length - 1) {
                 if (curr) {
                     if (curr == value) {
                         answer(1);
                     } else {

                         answer(0);
                     }
                 }
             } else {

                 end();
             }
             return false;

         });
         /*
    d.click(function() {
    
    var value = $('input[type="radio"]:checked').val();
    //d.hide();
     // c.text(value);
      
      if(i <= questions.length){
      if(curr) {
        if(curr == value) {
         answer(1);
       }
        
       else {
         
         answer(0);
        }
    }
      }
      else{
        
        end();
      }
    return false;
}); */

     });



     function end() {
         pointhel.hide();
         point.hide();
         d.hide();
         //a.hide();
         svar.hide();
         $(".lab").hide();
         c.text("Quizen är klar! total poäng: " + points);
         res.show();

         res.click(function () {
             res.attr("value", "Reload page to restart!");
             /* res.hide();
              c.hide();
              
              curr = null;
              i = 0;
              points = 0;
              pongshow();
              */

         });

     }





 });
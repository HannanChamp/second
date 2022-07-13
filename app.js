$(document).ready(function(){

          $("#txt2").keyup(function(){

            var val1 = $("#txt1").val();
            val1 = parseInt(val1);

            var val2 = $("#txt2").val();
            val2 = parseInt(val2);
            var answer = val1 + val2;

            $("#heading1").text(answer)
          })

            $("#txt1").keyup(function(){

            var val1 = $("#txt1").val();
            val1 = parseInt(val1);

            var val2 = $("#txt2").val();
            val2 = parseInt(val2);
            var answer = val1 + val2;

            $("#heading1").text(answer)
          })

 $(document).ready(function(){

          $("#txt4").keyup(function(){

            var val1 = $("#txt3").val();
            val1 = parseInt(val1);

            var val2 = $("#txt4").val();
            val2 = parseInt(val2);
            var answer = val1 * val2;

            $("#heading2").text(answer)
          })

        })


        $("#txt3").keyup(function(){

            var val1 = $("#txt1").val();
            val1 = parseInt(val1);

            var val2 = $("#txt2").val();
            val2 = parseInt(val2);
            var answer = val1 + val2;

            $("#heading1").text(answer)
          })





})
$(function () {
    
    "use strict";

    // init the validator
    $('#ajax-quote').validator();

    // when the form is submitted\
    $('#ajax-quote').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "assets/phpscripts/quote.html";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {

                    // data = JSON object that quote.php returns
                    $( "#msgSubmit" ).removeClass( "hidden" );
                    $('#ajax-quote')[0].reset();
                    
                }
            });
            return false;
        }
    })
});
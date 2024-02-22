$(document).ready(function(){
    $("#myButton").click(function(){
        $.ajax({
            url: 'http://example.com/path/to/your/endpoint', // Update with your endpoint URL
            type: 'POST',
            data: {'button_clicked': true},
            success: function(response) {
                console.log('Success:', response);
                // Handle success response here
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                // Handle error here
            }
        });
    });
});

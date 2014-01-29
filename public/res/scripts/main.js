jQuery(function(){
    var endDate = "Feb 22, 2014 09:00:00";
    jQuery('.countdown').countdown({ 
        date: endDate
        // , render: function(data) {
        //     console.log(data);
        // }
        // , onEnd: function() {
        // // $(this.el).addClass('ended');
        // }
    });
});
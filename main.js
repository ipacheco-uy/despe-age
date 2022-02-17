$( document ).ready(function() {

    $( "#main-btn" ).click(function() {
        
        $('#result').hide();
        
        let year = $('#hidden_year').val();
        
        
        let result = '<p>Estas viendo como era el sitio en ' + year + ' 🚀</p>';
                
             
                
        result += '<p class="divider"></p>'
        
        result += '<p><a href="img-alta/'+year+'_full.png" target="_blank"><img src="img-alta/'+year+'_full.png" class="website" ></a></p>';
        
        let tweet = 'Yo uso @despegar hace ';

        tweet += ' ¿Y vos? 👀 👀 Averigualo en 👇 ';
        
        $('#share').html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet" data-size="large" data-url="https://chcibelli.github.io/meli-age/" data-text="'+tweet+'">Tweet</a>');
        twttr.widgets.load();
        
        $('#result').html(result);
        $('#result, #share').show();        
    }); 
    
    $('#nickname').on('keypress',function(e) {
        if(e.which == 13) {
            $('#main-btn').click();
        }
    });
    
    var availableYears = [ 
        {label:"2021", value:2021}, 
        {label:"2020", value:2020}, 
        {label:"2019", value:2019}, 
        {label:"2018", value:2018}, 
        {label:"2017", value:2017}, 
        {label:"2016", value:2016}, 
        {label:"2015", value:2015}, 
        {label:"2014", value:2014}, 
        {label:"2013", value:2013}, 
        {label:"2012", value:2012}, 
    ];

    for(t=0;t<availableYears.length;t++) {
        $("#hidden_year").append(new Option(availableYears[t].label, availableYears[t].value));
    }
}); 
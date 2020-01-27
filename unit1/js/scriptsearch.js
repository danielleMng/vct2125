$.getJSON('data.json', function(data){
    var output='<ul class="searchresults">';
    $.each(data,function(key,val){
        output+='<li>';
        output+='<h2>'+ val.name+'</h2>';
        output+='<img src="images/'+val.name+'.jpg" alt=/>';
        output+='<h2>'+ val.year+'</h2>';
        output+='</li>';

    });
    output+='</ul>';
    $("#update").html(output);
});
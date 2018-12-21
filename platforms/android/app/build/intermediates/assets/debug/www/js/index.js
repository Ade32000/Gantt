document.addEventListener('deviceready', start, false);

var month_cpt = [];
var week_cpt = [];
var day_cpt = [];
var week_cpt = [];
var day_cpt = [];

for (var i = 1; i <= 12; i++) {
    month_cpt.push(i);
}
for (var i = 1; i <= 52; i++) {
    week_cpt.push(i);
}


function start(){
    console.log('hello');
    db.transaction(fillDB, errorCB, successCB);
}

$('#cancel').on('click', function(){
    //window.location= "index.html";
    window.location= "file:///android_asset/www/index.html";
});

$('#select_month').one('click', function(){
    for(var j=0; j<month_cpt.length; j++){
        $('#select_month').append('<option id="'+month_cpt[j]+'">'+month_cpt[j]+'</option>');
    }
});
$('#select_week').one('click', function(){
    for(var j=0; j<week_cpt.length; j++){
        $('#select_week').append('<option id="'+week_cpt[j]+'">'+week_cpt[j]+'</option>');
    }
});
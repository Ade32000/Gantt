document.addEventListener('deviceready', start, false);

/***** VARIABLES FORM  **************************** VARIABLES FORM ******************/

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
/************************************************************************************************* */
var nameProject = $('#input_projectName').val();
var nameTask = $('#input_taskName').val();
var dateTask = $('#pick_date').val();
var durationTask;



function start(){
    console.log('hello');
    db.transaction(fillDB, errorCB, successCB);
}


/****************** FORM ********************************* FORM **************************************/

$('#cancel').on('click', function(){
    window.location= "index.html";
    //window.location= "file:///android_asset/www/index.html";
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

/****************** END FORM ********************************* END FORM **************************************/

$('#publish').on('click', function(){
    // nameProject = $('#input_projectName').val();
    // nameTask = $('#input_taskName').val();
    // dateTask = $('#pick_date').val();   
    console.log(nameProject);
    console.log(nameTask);
    console.log(dateTask);
    
    return false;
});

console.log(nameProject);
    console.log(nameTask);
    console.log(dateTask);
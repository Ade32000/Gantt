var db = window.openDatabase("database", "1.0", "Gantt App", 200000);

function fillDB(tx){
    tx.executeSql("CREATE TABLE IF NOT EXISTS project (project_id unique, project_name)");
    tx.executeSql("CREATE TABLE IF NOT EXISTS task (task_id unique, task_name, task_date, task_duration, fk_project)");
    console.log('database created with success');
}

function errorCB(tx, err)
{
    console.log(err);
}

function successCB()
{
    console.log("success!");
}
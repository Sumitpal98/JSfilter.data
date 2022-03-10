const  data=[]

function Submit(){
    let name=document.getElementById("name").value;
    let Id=document.getElementById("id").value;
    let salary=document.getElementById("salary").value;
      const  myobject={name:name, id:Id, salary:salary}
     data.push(myobject)
     load()
}
function load(){
tbl="<table border='1' width='400'><tr><th>Name</th><th>Id</th><th>Salary</th><th>delete</th></tr>";
data.forEach(function(x, i){
    tbl+=`<tr><th>${x.name}</th> <th> ${x.id}</th> <th> ${x.salary}</th><th><button onclick='deleteList(${i})'>delete</button></th></tr>`
})
document.getElementById("msg").innerHTML=tbl;
}

function deleteList(value){
    data.splice(value,1)
    load()
}
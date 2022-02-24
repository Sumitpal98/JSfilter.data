
const Employee=[{cname:'samsung',price:300},
{cname:'nokia',price:400,pname:'laptop'},
{cname:'Oppo',price:500,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
{cname:'Realme',price:700,pname:'mobile'},
{cname:'vivo',price:800,pname:'mobile'},
]
function showdata(){
    let tbl= "<table border='1'width='500'><tr> <th>Name</th> <th>price</th> </tr>"
    var x=document.getElementById('search').value;
    var filterdata=Employee.filter(function(mydata){
        return(mydata.cname==x);  
    })
   /* var x=document.getElementById('search').value;
    var filterdata=Employee.filter(function(mydata){
        return(mydata.pname==x); 
    })*/
    filterdata.forEach(function(getvalue){
        tbl+=`<tr><th>${getvalue.cname}</th> <th> ${getvalue.price}</th> <th>${getvalue.pname}</th></tr>`
    })
    document.getElementById('msg').innerHTML=tbl
}

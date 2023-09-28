var object=[
    {Usuario: "Jose", contrasena: "jaja69", edad: 32},
    {Usuario: "Jacqueline", contrasena: "saulgoodman", edad: 27},
    {Usuario: "Pedro", contrasena: "amoamiesposa", edad: 10},
    {Usuario: "Luis", contrasena: "6940", edad: 15},
    {Usuario: "Saul", contrasena: "holapapa", edad: 15},
    {Usuario: "Jennifer", contrasena: "saludame", edad: 15}
]
function Main(){
    ShowTable();
}



function Login(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    for(let i=0; i< object.length; i++){
if(pass == object[i].contrasena && user == object[i].Usuario){
    if(object[i].edad>=18){
        window.location="practica1adultos.html";
    }else{
        window.location="practica1joven.html";
    }
    }else{
        console.log("No funciona");
    }
}
}
//Con un arreglo de objetos {user, password, age}. Realizar un login que capture usuario, contraseña, si los datos son correctos y dependiendo si es menor de edad o mayor de edad les muestre una sección de menores de edad o de mayores de edad según sea el caso.
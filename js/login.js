function validar(){
    var cursos = document.getElementById("contraseña").value;
    if ( cursos == "Derivadas" || cursos=="derivadas" || cursos== "DERIVADAS" ){
    window.location = "https://aeon-merx.github.io/AEON-MERX/bgzdbndgljblnjdzgnlbjnldg.pdf"; 
    }
      
    else if( cursos == "Tarot" || cursos=="tarot" || cursos=="TAROT" || cursos=="Programación"){
    window.location = "https://aeon-merx.github.io/AEON-MERX/libro_thoth_espanol.pdf"; 
    }
    else
    alert("Escribe correctamente el nombre del curso que deseas");
    }

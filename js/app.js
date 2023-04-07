let formulario = document.getElementById('formulario')
formulario.addEventListener('submit', crearObj);
class persona{
    constructor(nombre,edad,dni,peso,altura,nacimiento)
    {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._peso = peso;
        this._altura = altura;
        this._nacimiento = new Date().getFullYear() - edad;
    }

    get nombre()
    {
      return this._nombre;  
    }
    get edad()
    {
      return this._edad;  
    }
    get dni()
    {
      return this._dni;  
    }
    get peso()
    {
      return this._peso;  
    }
    get altura()
    {
      return this._altura;
    }
    get nacimiento()
    {
      return this._nacimiento;
    }
    esMayorDeEdad (){
        if (this.edad >=18) {
            alert('Es mayor de edad');
        }else
        {
            alert('Es menor de edad ');
        }
    }
    mostrarGeneracion()
    {
        if(this.nacimiento>=1994 && this.nacimiento<=2010)
        {
            alert('Generacion Z - Rasgo : IRREVERENCIA')
        }
        else if(this.nacimiento>=1981 && this.nacimiento<=1993)
        {
            alert('Generacion Y - Rasgo : FRUSTRACION')
        }
        else if(this.nacimiento>=1969 && this.nacimiento<=1980)
        {
            alert('Generacion X - Rasgo : OBSESION POR EL EXITO')
        }
        else if (this.nacimiento>=1949 && this.nacimiento<=1968)
        {
            alert('Baby Booom - Rasgo : AMBICION')
        }
        else if(this.nacimiento>=1930 && this.nacimiento<=1948)
        {
            alert('Silent Generation - Rasgo : AUSTERIDAD')
        }
    }
    mostrarInfo() {
        document.getElementById('mostrar').innerHTML =`
        <ul>
        <li>Titulo: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.nacimiento}</li>
        </ul>
        `;
      }
}
function crearObj (e)
{
    //e (event) evento de js
    //para detener el funcionamiento del subnit que recarga la pag
    e.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let dni = document.getElementById('dni').value;
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    
    let nuevaPersona = new persona (nombre,edad,dni,peso,altura,nacimiento)
   
    document.getElementById('generacion').addEventListener("click",function(){
        nuevaPersona.mostrarGeneracion();
    });
    document.getElementById('mayorEdad').addEventListener("click",function(){
        nuevaPersona.esMayorDeEdad();
    });
    document.getElementById('mostrarDatos').addEventListener('click', function(){
        nuevaPersona.mostrarInfo();
    });
}





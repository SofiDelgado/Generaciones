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
        this._nacimiento = nacimiento;
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
        if (this.nacimiento <=2004) {
            console.log('son menores de 18')
        }
    }
    mostrarGeneracion()
    {
        if(nacimiento>=1994 && nacimiento<=2010)
        {
            alert('Generacion Z - Rasgo : IRREVERENCIA')
        }
        else if(nacimiento>=1981 && nacimiento<=1993)
        {
            alert('Generacion Y - Rasgo : FRUSTRACION')
        }
        else if(nacimiento>=1969 && nacimiento<=1980)
        {
            alert('Generacion X - Rasgo : OBSESION POR EL EXITO')
        }
        else if (nacimiento>=1949 && nacimiento<=1968)
        {
            alert('Baby Booom - Rasgo : AMBICION')
        }
        else if(nacimiento>=1930 && nacimiento<=1948)
        {
            alert('Silent Generation - Rasgo : AUSTERIDAD')
        }
    }
    mostrarInfo() {
        document.write(`
        <ul>
        <li>Titulo: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.nacimiento}</li>
        </ul>
        `);
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
    let nacimiento = document.getElementById('nacimiento').value;
    let nuevaPersona = new persona (nombre,edad,dni,peso,altura,nacimiento)
    /*console.log('nombre: '+nombre + '\nedad: '+edad+'\ndni: '+dni+'\npeso: '+peso+ '\naltura: '+altura+ '\nnacimiento: '+nacimiento)*/
    /*document.write('nombre: '+nuevaPersona.nombre);
    document.write('EDAD '+nuevaPersona.edad);
    document.write('dni: '+nuevaPersona.dni);
    document.write('peso: '+nuevaPersona.peso);
    document.write('altura: '+nuevaPersona.altura);
    document.write('nacimiento: '+nuevaPersona.nacimiento);*/
    nuevaPersona.esMayorDeEdad();
}





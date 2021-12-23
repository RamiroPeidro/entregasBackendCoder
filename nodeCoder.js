//funciones con un solo parametro
let mostrar = param => {
    console.log(param);
}

//funciones con una unica linea 
let mostarDos = params => console.log(params);

//return implicito
const primerdiar = (a, b) => (a+b)/2

//function that prints hello world
let helloWorld = () => console.log('helloWorld')

const ejecutar = cualquierFuncion => cualquierFuncion()


const operacion = (a, b, operacion) => operacion(a, b)

const sumar = (a, b) => a + b
const restar = (a, b) => a - b
const multiplicar = (a, b) => a * b
// const dividir = (a, b) => a / b
const modulo = (a, b) => a % b


const copiarArchivo = async (nombreArchivo) => {
    const archivo = await buscarArchivo(nombreArchivo)
    const contenidoArchivo = await leerArchivo(archivo)
    const archivoCopiado = await copyArchivo("NuevoNombre", contenidoArchivo)
}


function dividir (dividendo, divisor) {
    return new Promise ((resolve, reject) => {
        if (divisor === 0) {
            reject('No se puede dividir por 0')
        }
        resolve(dividendo / divisor)
    }
  )
}


dividir(10, 2)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))



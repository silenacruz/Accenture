let nombre = document.getEmentById('name');
let dni = document.getEmentById('dni');
let telefono = document.getEmentById('telefono');
let email = document.getEmentById('email');
let legajo = document.getEmentById('legajo');
let curso = document.getEmentById('curso');
let enviar_datos = document.getElementById('enviar');

function calcularEdad ()
{
	let d = document.getEmentById('user_date').value;
	let inDate = new Date (d);
	let year = inDate.getFullYear();
	let fec_actual = new Date ();
	let fec_year = fec_actual.getFullYear();
	let edad = fec_year - year;
	if (edad >= 18) 
	{
		alert("es mayor");
	}
	else
	{
		alert("es menor");
	}
}

function validarCurso()
{
	if(curso == 'A' && edad >=18)
	{
		alert("pasa padre");
	}
}
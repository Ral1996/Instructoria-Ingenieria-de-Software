<?php

// Maquetado web del Patrón Prototype
	echo "<!DOCTYPE html>";
	echo "<html>";
	echo "<head>
			<title>Patrón Prototype</title>
			<meta charset='UTF-8'>
			<meta name='viewport' content='width=device-width, initial-scale=1'> 
			<link href='css/bootstrap.css' rel='stylesheet' type='text/css'>
			<link href='css/bootstrap.min.css' rel='stylesheet' type='text/css'>			
		</head>";
	echo "<body>
			<div class='container'><br>
				<div class='jumbotron text-center'>
					<h1>Patrón Prototype - PHP</h1>
					<p><strong>Materia: </strong>Ingeniería de Software. <strong> Docente:</strong> Ing.Milagro Alicia de Reyes.</p>
					<p><strong>Instructor: </strong>Raúl Mauricio Portillo Muñoz, Derechos reservados, By RED - PortillO´s.</p> <!-- Pasamos los datos del desarrollador -->
				</div>
			</div>
		<script type='text/javascript' src='js/bootstrap.js'></script>
		<script type='text/javascript' src='js/bootstrap.min.js'></script>
		</body>";
	echo "</html>";
// Aquí termina el Maquetado

abstract class CaracteristicasPC
{
	// Declaramos $codigo "Protected", para que pueda ser accesible desde la misma clase o sub-clase.
	protected $codigo;
	public function MostrarInfoPC($numero,$procesador,$memoriaRAM,$discoDuro,$numInventario) // Pasamos valores (Caracteristicas).
	{
		$this->Procesador=$procesador;
		$this->MemoriaRAM=$memoriaRAM;
		$this->DiscoDuro=$discoDuro;
		$this->NumeroDeInventario=$numInventario;
		$this->Numero=$numero;
		 
		echo "<div class='container'>"; // Ajustamos las tablas al contenedor global de la página
		echo "<table class='table table-hover'>
				<tr>
					<th width='150px'>".$this->Numero."</th> <!-- Pasamos el número de cada PC - Iterado -->
					<th>".$this->Procesador."</th>			 <!-- Pasamos caracteristica del Procesador -->
					<th>".$this->MemoriaRAM."</th>			 <!-- Pasamos caracteristica de la Memoria RAM -->
					<th>".$this->DiscoDuro."</th>			 <!-- Pasamos caracteristica del HD -->
					<th>".$this->NumeroDeInventario."</th>   <!-- Pasamos numero de Inventario - Iterado -->
				</tr>
			</table>";
		echo "</div>";


	}
	abstract function __clone();
}
class LaboratorioRedes extends CaracteristicasPC // Creamos la clase LaboratorioRedes y le heredamos CaracteristicasPC
{
	function __construct()
	{
		echo "<div class='container'>"; // Adaptamos la alerta y la tabla al contenedor global de la página.
		echo "<div class='alert alert-success'>";
		echo "<center><h3>Estas son las PC de el Laboratorio de Redes</h3></center>";
		echo "</div>";
		echo "<table class='table table-hover'>
					<thead class='thead-inverse'>
						<tr>
							<th>Número</th>
							<th>Procesador</th>
							<th>Memoria RAM</th>
							<th>Disco Duro</th>
							<th>Número de Inventario</th>
						</tr>
					</thead>
			  </table>";
		echo "</div>";
	}
	function __clone()
	{
		
	}
}
class ComputoA extends CaracteristicasPC // Creamos la clase ComputoA y le heredamos CaracteristicasPC
{
	function __construct()
	{
		echo "<div class='container'>"; // Adaptamos la alerta y la tabla al contenedor global de la página.
		echo "<div class='alert alert-success'>";
		echo "<center><h3>Estas son las PC de el Centro de Computo A</h3></center>";
		echo "</div>";
		echo "<table class='table table-hover'>
						<thead class='thead-inverse'>
							<tr>
								<th>Número</th>
								<th>Procesador</th>
								<th>Memoria RAM</th>
								<th>Disco Duro</th>
								<th>Número de Inventario</th>
							</tr>
						</thead>
			  </table>";
		echo "</div>";
	}
	function __clone()
	{
		
	}
}

class Computadoras // En está clase especificamos las caracteristicas de las PC del Lab de Redes y de el Centro de Computo A.
{
	public function __construct() // Función constructor accesible tanto fuera como dentro de la clase.
	{
		$LabRedes = new LaboratorioRedes(); // Creamos un nuevo objeto y lo almacenamos en una variable.
		for($i = 1; $i < 19 ; $i++) { // Definimos el número de veces que cree las PC del Lab. de Redes y que asigne un número AI.
			$cloneLabRedes = clone$LabRedes; // Clonamos LabRedes y después nombramos las caracteristicas de las PC.
			$cloneLabRedes->MostrarInfoPC($i, "Intel Core i3", "DDR3 - 8GB", "HD - 1000GB","12020-5404-070-".$i);
		}

		$ComputoA = new ComputoA();	     // Creamos un nuevo objeto y lo almacenamos en una variable.
		for($j = 1; $j < 31 ; $j++) { // Definimos el número de veces que cree las PC del Lab. de Redes y que asigne un número AI.
			$cloneCentroA = clone$ComputoA; // Clonamos CentroA y después nombramos las caracteristicas de las PC.
			$cloneCentroA->MostrarInfoPC($j, "Intel Core i5", "DDR3 - 16GB", "HD - 2000GB","12020-5404-070-".$j);
		}
	}
}

new Computadoras();

?>
Algoritmo Calculadora_de_promedio
	Definir nota1,nota2,nota3,nota4,Resultado_total_de_promedios Como Real;
	
	Escribir "Bienvenido a la calculadora de promedios con porcentaje para que sepas tus propias notas :)";
	
	Escribir "Bueno,sin más divagacion, Digite su primer nota sin coma:";
	Escribir "recordarle que su procentaje esta en un 30%";
	Leer nota1;
	nota1<-nota1*0.30;
	Escribir"su nota con el porcentaje es de:",nota1;
	
	Escribir "Digite su segunda nota sin coma:";
	Escribir "recordarle que su procentaje esta en un 35%";
	Leer nota2;
	nota2<-nota2*0.35;
	Escribir"su nota con el porcentaje es de:",nota2;
	
	Escribir "Digite su tercera nota nota sin coma:";
	Escribir "recordarle que su procentaje esta en un 35%";
	Leer nota3;
	nota3<-nota3*0.35;
	Escribir"su nota con el porcentaje es de:",nota3;
	
	Escribir "Entonces, Recordar que su nota en un 70% es de:";
	Resultado_total_de_promedios <- (nota1+nota2+nota3)*0.70;
	Escribir Resultado_total_de_promedios;
	
	Escribir "Nos falta poquito, cual es su nota de coef2";
	Escribir "recordarle que su procentaje esta en un 30%";
	Leer nota4;
	nota4<-nota4*0.30;
	
	Escribir"su nota coef 2 con el porcentaje es de:",nota4;
	Resultado_total_de_promedios <- Resultado_total_de_promedios + nota4;
	Escribir "su nota final es de:",Resultado_total_de_promedios;
	
	Si Resultado_total_de_promedios >= 4 Entonces
		Escribir "Felicidades usted podra avanzar al siguiente curso";
	SiNo
		Escribir "Lamentablemente usted no podra seguir hasta realizar nuevamente este curso :( ";
	FinSi
	
FinAlgoritmo

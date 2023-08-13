#include <iostream>
#include <string>

using namespace std;
int main()
{
   string raptor_prompt_variable_zzyz;
   ? ? contadorvueltas;
   ? ? posiciones;
   ? ? axnotas;
   ? ? apuntador1;
   ? ? apuntador2;
   ? ? axnombre;
   ? ? [] notas = new ? ? [ ? ? +1];
   ? ? [] nombres = new ? ? [ ? ? +1];

   posiciones = 0;
   apuntador1 = 1;
   apuntador2 = 2;
   axnotas = 0;
   axnombre = "";
   contadorvueltas = 0;
   raptor_prompt_variable_zzyz = "digame cuantos alumnos quieren beca";
   cout << raptor_prompt_variable_zzyz << endl;
   cin >> posiciones;
   notas[posiciones] = 0;
   nombres[posiciones] = "";
   while (!(apuntador1 > posiciones))
   {
      raptor_prompt_variable_zzyz = "dime el nombre del alumno";
      cout << raptor_prompt_variable_zzyz << endl;
      cin >> nombres(apuntador1);
      raptor_prompt_variable_zzyz = "dime la nota general del alumno";
      cout << raptor_prompt_variable_zzyz << endl;
      cin >> notas(apuntador1);
      apuntador1 = apuntador1 + 1;
   }
   apuntador1 = 1;
   while (!(contadorvueltas == posiciones))
   {
      while (!(apuntador2 > posiciones))
      {
         if (notas(apuntador1) < notas(apuntador2))
         {
            axnombre = nombres(apuntador1);
            axnotas = notas(apuntador1);
            nombres[apuntador1] = nombres(apuntador2);
            notas[apuntador1] = notas(apuntador2);
            nombres[apuntador2] = axnombre;
            notas[apuntador2] = axnotas;
         }
         else
         {
         }
         apuntador1 = apuntador1 + 1;
         apuntador2 = apuntador2 + 1;
      }
      apuntador1 = 1;
      apuntador2 = 2;
      contadorvueltas = contadorvueltas + 1;
   }
   apuntador1 = 1;
   while (!(apuntador1 > posiciones))
   {
      if (notas(apuntador1) >= 8)
      {
         cout << apuntador1 + "." + nombres(apuntador1) + "notas:" + notas(apuntador1) + " tiene beca." << endl;
         cout << "" << endl;
      }
      else
      {
         cout << apuntador1 + "." + nombres(apuntador1) + "notas:" + notas(apuntador1) + " no tiene beca." << endl;
         cout << "" << endl;
      }
      apuntador1 = apuntador1 + 1;
   }

   return 0;
}

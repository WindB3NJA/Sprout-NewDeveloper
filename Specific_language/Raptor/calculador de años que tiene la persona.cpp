#include <iostream>
#include <string>

using namespace std;
int main()
{
   string raptor_prompt_variable_zzyz;
   ?? año_actual;
   ?? edad;
   ?? añodenacimiento;

   año_actual =2023;
   añodenacimiento =0;
   raptor_prompt_variable_zzyz ="ingrese su año de nacimiento";
   cout << raptor_prompt_variable_zzyz << endl;
   cin >> añodenacimiento;
   edad =añodenacimiento-año_actual;
   cout << "su edad es de "+edad+"." << endl;
   return 0;
}

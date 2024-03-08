import React from 'react'

function Table() {
  return (
<div class="overflow-x-auto w-full border-t">
   <table class="table-auto w-full">
      <thead class="border-b">
         <tr class="bg-gray-100">
            <th class="text-left text-lg  p-4 font-medium">
               Nombre de Usuario
            </th>
            <th class="text-left text-lg p-4 font-medium">
               Primer Nombre
            </th>
            <th class="text-left text-lg p-4 font-medium">
               Perfil
            </th>
            <th class="text-left text-lg p-4 font-medium">
               Estado
            </th>
            <th class="text-left text-lg p-4 font-medium">
               Acciones
            </th>
         </tr>
      </thead>
      <tbody>
         <tr class="border-b hover:bg-gray-50">
            <td class="p-4 text-sm font-normal">
               Prof. Lucie Waters 
            </td>
            <td class="p-4 text-sm font-normal">
               basic@example.com 
            </td>
            <td class="p-4 text-sm font-normal">
               Administrator
            </td>
            <td class="p-4 text-sm font-normal">
               Super Administrator 
            </td>
            <td class="p-4 text-sm font-normal">
               Super Administrator 
            </td>
         </tr>
         <tr class="border-b hover:bg-gray-50">
            <td class="p-4 text-sm font-normal">
               Anahi Bashirian (You) 
            </td>
            <td class="p-4 text-sm font-normal">
               admin@example.com  
            </td>
            <td class="p-4 text-sm font-normal">
               Super Administrator 
            </td>
            <td class="p-4 text-sm font-normal">
               Super Administrator 
            </td>
            <td class="p-4 text-sm font-normal">
               Super Administrator 
            </td>
         </tr>
      </tbody>
   </table>
</div>

  )
}

export default Table

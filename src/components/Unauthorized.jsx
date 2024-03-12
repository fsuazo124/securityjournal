import React from 'react'

function Unauthorized() {
  return (
    <div class="h-screen w-screen bg-gray-50 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                <div class="w-full lg:w-1/2 mx-8">
                    <div class="text-7xl text-gray-800 font-dark font-extrabold mb-8 mt-20">¡Oh no!</div>
                <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                    No tienes acceso a esta página, por favor inicia sesión
                </p>
                
                <a href="/" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-700 active:bg-green-600 hover:bg-green-600">Regresa a Inicio</a>
        </div>
            <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img src="/src/assets/unauthorized.png" class="" alt="Unauthorized"/>
            </div>
        
        </div>
    </div>
  )
}

export default Unauthorized

import React from "react";
export default function App (){
  return(
    <>
      <div className="bg-green-200">
          <div className=" ">
            <p className="text-3xl text-green-700 text-center font-extrabold p-10">Diferencias entre un sapo de cuevas y un sapo de por ahí</p>
            <img className="w-full shadow-2xl p-20 rounded-2xl" src="images/image01.png" alt="" />
          </div>
        
        
          <div className="flex flex-col md:flex-row md:flex-wrap">
            <div className="bg-green-950 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 p-5 flex flex-col items-center">
              <img className="w-180 p-5 rounded-2xl shadow-2xl" src="images/sapoDeCueva.jpg" alt="Sapo de las cuevas" />
              <p className="text-xl text-green-50 font-semibold text-center p-7">Este es un sapo de Cueva ¿Diferencia de otros sapos? este vive en als cuevas, este no anda por ahí.</p>
            </div>
            <div className="bg-green-950 md:basis-1/2 lg:basis-1/2 xl:basis-1/2 p-10 flex flex-col items-center">
              <img className="w-150 justify-center rounded-2xl shadow-2xl " src="images/sapoPH2.jpg" alt="Sapo de por ahí" />
              <p className="text-xl text-green-50 font-semibold text-center p-7">Este es un sapo de por ahí, a diferencia del sapo de las cuevas este no vive en una cueva</p>
            </div>
            <div className="flex flex-col items-center text-center col-span-full basis-2/2 m-50">
              <p className="text-5xl">🤔</p>
              <p className="text-2xl text-green-700 text-center font-bold">¿Qué pasaría si un sapo de la cueva sale por ahí o si un sapo de por ahí entra a la cueva?</p>
            </div>
            <div className="bg-green-100 md:basis-2/5 lg:basis-1/2 xl:basis-1/3 p-5 rounded-2xl">
              <img className="rounded-2xl shadow-xl" src="images/sapoGalactico.jpg" alt="Sapo galáctico" />
              <p className="text-xl font-bold text-center p-4">Se volvería un sapo astral y podría adquirir un poder más allá de la imaginación humana</p>
            </div>
            <div className="bg-green-300 md:basis-3/5 lg:basis-1/2 xl:basis-1/3 p-5 rounded-2xl">
              <img className="rounded-2xl shadow-xl" src="images/sapoReflexivo.jpg" alt="Sapo Reflexivo" />
              <p className="text-xl font-bold text-center p-4">Se volvería un sapo reflexivo ya qué la información para procesar al salir por ahí despues de haber estado toda su vida dentro de la cueva puede ser mucha</p>
            </div>
            <div className="bg-green-400 md:basis-3/5 lg:basis-full xl:basis-1/3 p-5 rounded-2xl flex flex-col items-center">
              <img className="rounded-2xl shadow-xl"src="images/sapoC.jpg" alt="Sapo en cueva Artificial" />
              <p className="text-xl font-bold text-center p-4">Se crearía una cueva artificial en lo que puede volver a su cueva natal</p>
            </div>
            <div className="bg-green-500 md:basis-2/5 lg:basis-1/2 xl:basis-1/3 p-5 rounded-2xl">
              <img className="rounded-2xl shadow-xl" src="images/Diomedes.jpg" alt="Diomedes Diaz" />
              <p className="text-xl font-bold text-center p-4">Se crearía una brecha espacio-tepmporal en la que se unirían varias realidades y Diomedes Diaz estaría vivo y no metería vicio</p>
            </div>
            <div className="bg-green-600 md:basis-2/5 lg:basis-1/2 xl:basis-1/3 p-5 rounded-2xl">
              <img className="rounded-2xl shadow-xl" src="images/planetaEx.webp" alt="Planeta Explotando" />
              <p className="text-xl font-bold text-center p-4">La tierra explotaría debido a una sobrecarga de energía acumulada por el sapo de la cueva al salir por ahí</p>
            </div>
            <div className="bg-green-700 md:basis-3/5 lg:basis-full xl:basis-1/3 p-5 rounded-2xl">
              <img className="rounded-2xl shadow-xl" src="images/sapoPH.jpg" alt="Sapo de por ahí" />
              <p className="text-xl font-bold text-center p-4">Simplemente se volvería un sapo de por ahí sin preocupaciones ni problemas, solo recibiendo vitamina D y buenas energías</p>
            </div>
          </div>
          <footer>
            <p className="text-2xl text-center text-green-700 font-bold p-20">✨Gracias por ver✨</p>
          </footer>
      </div>
    </>
  )
}
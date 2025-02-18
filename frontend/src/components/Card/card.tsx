import React from 'react';
import { Product } from './types';

export const Card: React.FC<Product> = ({ name, price, image }) => {
  return (
    <div className="bg-lightPink rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Contenedor de imagen */}
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          width={300}
          height={200}
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-rose-600">
            ${price.toLocaleString('es-CO')} COP
          </p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-full text-sm transition-colors duration-200">
            Ver detalle
          </button>
        </div>
      </div>
    </div>
  );
};
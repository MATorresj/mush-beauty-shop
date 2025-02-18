import React, { useState } from 'react';
import { ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   // setIsMenuOpen(!isMenuOpen);
  //   console.log('toggleMenu');
  // };

  return (
    <header className="bg-white shadow-sm">
      {/* Contenedor principal */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Barra superior */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-rose-500">MUSH</span>
          </div>

          {/* Menú de navegación (desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              Inicio
            </a>
            <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              Maquillaje
            </a>
            <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              Skin care
            </a>
            <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              Gama alta
            </a>
            <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              Gama media
            </a>
            <a href="#" className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              Marcas
            </a>
          </nav>

          {/* Carrito y menú hamburguesa */}
          <div className="flex items-center space-x-4">
            {/* Icono del carrito */}
            <button className="text-gray-600 hover:text-rose-500 transition-colors duration-200">
              <ShoppingCartIcon className="h-6 w-6" />
            </button>

            {/* Menú hamburguesa (mobile) */}
            {/* <button
              onClick={toggleMenu}
              className="md:hidden text-gray-600 hover:text-rose-500 transition-colors duration-200"
            >
              {/* {isMenuOpen ? ( */}
                <XMarkIcon className="h-6 w-6" />
              {/* // ) : ( */}
                <Bars3Icon className="h-6 w-6" />
              {/* // )} */}
            {/* </button> */}
          </div>
        </div>

        {/* Menú de navegación (mobile) */}
        {/* {isMenuOpen && ( */}
          <nav className="md:hidden mt-4 space-y-2">
            <a href="#" className="block text-gray-600 hover:text-rose-500 py-2">
              Inicio
            </a>
            <a href="#" className="block text-gray-600 hover:text-rose-500 py-2">
              Maquillaje
            </a>
            <a href="#" className="block text-gray-600 hover:text-rose-500 py-2">
              Skin care
            </a>
            <a href="#" className="block text-gray-600 hover:text-rose-500 py-2">
              Gama alta
            </a>
            <a href="#" className="block text-gray-600 hover:text-rose-500 py-2">
              Gama media
            </a>
            <a href="#" className="block text-gray-600 hover:text-rose-500 py-2">
              Marcas
            </a>
          </nav>
        {/* // )} */}
      </div>
    </header>
  );
};
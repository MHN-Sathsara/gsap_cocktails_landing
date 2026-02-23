import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
'use client';

import {allcocktails } from '../../constants/index.js';
import { useState } from 'react';

const Menu = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = allcocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  }

  return (
    <section id="menu" aria-labelledby='menu-heading'>
      <img src='/images/slider-left-leaf.png' alt='left-leaf' id='m-left-leaf' />
      <img src='/images/slider-right-leaf.png' alt='right-leaf' id='m-right-leaf' />

      <h2 id='menu-heading' className='sr-only'>
        Cocktail Menu
      </h2>

      <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
        {allcocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button key={cocktail.id} className={`
            ${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'} `}
            onClick={() => goToSlide(index)}>
              {cocktail.name}
            </button>
          )
        })}
      </nav>
    </section>
  )
}

export default Menu
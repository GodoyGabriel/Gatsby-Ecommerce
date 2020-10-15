import React from 'react';
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';
import { Link } from 'gatsby';

export default function ThankYou(){
  return (
    <div>
      <SEO title='Compra exitosa'/>
      <Purchase>
        <h2>Compra exitosa</h2>
        <p>Gracias por tu compra!</p>
        <span rol='img' aria-label='emoji'>😉</span>
        <Link to='/'>
          <Button>Volver al Catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
import React from 'react';
import CounterTest from '../CounterTest';
import {screen, render} from '@testing-library/react';
describe('Test de contador', ()=>{
  // describe('Comprobar incremento', ()=>{
  //   test('test counter', ()=> {
  //   render(<CounterTest/>)});
  // });
  it('Verifica Titulo COUNTER', () => {

    render(<CounterTest/>);
    expect(screen.queryAllByText(/Counter/i)).toBeInTheDocument();
  });
})
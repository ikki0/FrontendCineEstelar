import React from 'react';
import './SingUp.css'
import { AppFormSingUp } from "../../components/form/AppFormSingUp";
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

function SingUp(): React.JSX.Element {
  return (
    <>
    <Header/>
      <div className='main'>
      <AppFormSingUp />
      </div>
      <Footer/>
    </>
  );
}

export { SingUp };

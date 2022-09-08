import React from 'react';
import { connect } from 'react-redux'
import EnterDate from './EnterDate';
import EnterGuisado from './EnterGuisado';
import CreateImage from './CreateImage';
import ColorPicker from './ColorPicker';
import Checkbox from './Checkbox';
import styles from '../assets/styles/components/Interaccion.module.scss'

const Interaccion = (props) => {

  let isGradient = props.style.backgroundType
  
  return (
    <>
      <section className={styles.EditStyles}>
        <Checkbox />
        {isGradient == 'gradient' 
          ?
            <>
              <ColorPicker section={'background'} label='Color de fondo' />
              <ColorPicker section={'gradient'} label='Color gradiente' />
            </>
          :
            <ColorPicker section={'background'} label='Color de fondo' />
          }
          <ColorPicker section={'text'} label='Color del texto' />
      </section>
    <section id="entradas" className={styles.entradas}>  
      <EnterDate />
      <EnterGuisado />
      <CreateImage />
    </section>
    </>
  )
};

const mapStateToProps = state => {
  return{
    style: state.styles
  }
}

export default connect(mapStateToProps, null)(Interaccion);
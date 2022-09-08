import React from 'react';
import { connect } from 'react-redux';
import Option from './Option';
import style from '../assets/styles/components/VistaPrevia.module.scss';

const Interaccion = (props) => {

  const dateIsEnable = props.date.length > 0
  const options = props.options
  const optionsIsEnable = options.length > 0
  const styles = props.styles
  /* const optionsIsEnable = options.length > 0 */ /* || options.length + 1 || options.length - 1 */
  
  return (
    <section id="menu" className={style.Menu} style={ styles.backgroundType == 'gradient' ? {background: `radial-gradient(circle, ${styles.gradientColor} 0%, ${styles.backgroundColor} 100%)`} : {background: `${styles.backgroundColor}` } }>
      <div id="container" className={style.container}>
        <div id="encabezado" className={style.encabezado} style={{color: `${style.textColor}`, backgroundImage: `linear-gradient(to right, ${style.textColor} 50%, rgba(255,255,255,0) 0%)`}}>
          {dateIsEnable
            ?
              <div id="encabezado-container" className={style['encabezado-container']} >
                <p id="fecha" className={style.fecha}>{props.date}</p>
                <p id="hoy" className={style.hoy}>HOY EN SAGAZ</p>
              </div>
            :
              console.log('Date is not enable')
          }
        </div>
        <div id="guisados" className={style.guisados} style={{ color: `${style.textColor}` }} >
          {optionsIsEnable
            ?
              options.map(option => 
                <Option id={ option } optionText={ option } key={ option }/>
              )
            :
              console.log('No options listed')
          }
        </div>
        <div id="pie" className={style.pie} style={{ color: `${style.textColor}`, backgroundImage: `linear-gradient(to right, ${style.textColor} 50%, rgba(255,255,255,0) 0%)` }}>
          <p id="pie-mensaje" className={style['pie-mensaje']}>BUEN PROVECHO</p>
        </div>
      </div>
    </section>

  )
};

const mapStateToProps = (state) => {
  return {
    date: state.date,
    options: state.options,
    styles: state.styles
  }
}

export default connect(mapStateToProps, null)(Interaccion);
import React from "react";
import { connect } from "react-redux";
import { guisadoText, addOption } from "../actions";
import styles from '../assets/styles/components/EnterGuisado.module.scss'

const EnterGuisado = (props) => {

  const guisadoText = (e) => {
    const text = e.target.value
    const upperCaseText = text.toUpperCase()
    props.guisadoText(upperCaseText);
  }

  const handleEvent = (e) => {
    if(e.code === 'Enter') {
      const optionText = props.optionText;
      if(optionText.length > 0){
        props.addOption(optionText)
        e.target.value = ''
        props.guisadoText('') 
      }
    }
  }

  const handleClick = () => {
    const optionText = props.optionText
    if(optionText.length > 0){
      props.addOption(optionText)
      const guisadoInput = document.getElementById('guisado')
      guisadoInput.value = ''
      props.guisadoText('') 
    }
  }

  return(
    <div className={styles.ContainerWrapper}>
      <div id="enter-container" className={styles.EnterContainer}>
        <input
          id="guisado"
          className={styles.guisado}
          type="text"
          placeholder="Ingresar guisado"
          onKeyDown={handleEvent}
          onChange={guisadoText} />
      </div>
      <div id="btn-container" className={styles['btn-container']}>
        <button
          id="addFood"
          className={[styles.addFood, styles.btn].join(' ')}
          onClick={handleClick}>
            Agregar
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    optionText: state.optionText,
  }
}

const dispatchStateToProps = {
  guisadoText,
  addOption,
}

export default connect(mapStateToProps, dispatchStateToProps)(EnterGuisado);
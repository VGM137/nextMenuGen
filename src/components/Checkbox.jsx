import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { backgroundType } from '../actions';
import styles from '../assets/styles/components/Checkbox.module.scss'

const Checkbox = () => { 

  let dispatch = useDispatch()

  const handleChange = (e) => {
        let type = e.target.value
        dispatch(backgroundType(type))
  }

  return (
    <form onChange={(e) => handleChange(e)} className={styles.CheckboxWrapper}  >
        <div className={styles['chackbox-container']} >
            <label htmlFor='gradient' >Fondo difuminado</label>
            <input name='type' type='radio' defaultChecked value='gradient' id='gradient' />
        </div>
        <div className={styles['chackbox-container']} >
            <label htmlFor='solid' >Fondo sólido</label>
            <input name='type' type='radio' value='solid' id='solid' />
        </div>
    </form>
  )
}

export default connect(null, null)(Checkbox)
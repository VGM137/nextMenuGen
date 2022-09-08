import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { guisadoText, addOption, setImgUrl } from "../actions";
import style from '../assets/styles/components/Interaccion.module.scss'

const CreateImage = (props) => {

  const dispatch = useDispatch()
  let imgUrl = useSelector(state => state.imgUrl)
  let styles = props.styles

  const getMenu = () => {
    let menu = document.getElementById('menu')
    console.log(menu)
    createImage()
  }

  const createImage = async () => {
    const payload = { 
      html: document.getElementById('menu').outerHTML,
      css: `
      body { 
        font-size: 1em; 
        font-family: 'Finger Paint'; 
      }
      .VistaPrevia_Menu__c_KSs{
        width: 400px;
        height: 400px;
        margin: auto;
        background: ${styles.backgroundType == 'gradient' ? `radial-gradient(circle, ${styles.gradientColor} 0%, ${styles.backgroundColor} 100%)` : `${styles.backgroundColor}` };
        display: flex;
        position: relative;
        box-shadow: 0px 0px 16px 0px #333333;
        font-size: .65em;
      }
      .container{
        margin: auto;
        width: 80%;
        display: block;
      }
      .encabezado-container{
        max-width: 100%;
        margin: 0 auto;
      }
      .encabezado{
        color: ${styles.textColor};
        display: flex;
        margin: auto;
        text-align: center;
        background-image: linear-gradient(to right, ${styles.textColor} 50%, rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 10px 2px;
        background-repeat: repeat-x;
      }
      .fecha{
        display: flex;
        height: 1em;
        width: 100%;
        margin: 5px auto;
        text-align-last: justify;
        align-items: center;
        justify-content: center;
      }
      .hoy{
        margin: 5px auto;
        margin-bottom: 15px;
        height: 1em;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .guisados{
        width: auto;
        color: ${styles.textColor};
        text-align: center;
        box-sizing: border-box;
        padding: 10px 0 25px 0;
      }
      
      .pie{
        background-image: linear-gradient(90deg, ${styles.textColor} 50%,hsla(0,0%,100%,0) 0);
        background-position: top;
        background-repeat: repeat-x;
        background-size: 10px 2px;
        color: ${styles.textColor};
        padding: 10px 0;
      }
      .pie-mensaje{
        display: flex;
        height: 1em;
        box-sizing: border-box;
        margin: auto;
        align-items: center;
        justify-content: center;
      }
      .quitar{
        position: absolute;
        background-color: rgba(0,0,0,0);
        border: none;
        color: rgba(0,0,0,0);
        right: 50px;
        height: 20px;
        width: 20px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }
      .quitar:hover{
        background-color: rgba(146, 146, 146, 0.5);
        color: rgb(175, 175, 175);
        border: solid 1px white;
      }
      .opcion{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 15px 0 0 0;
        text-transform: uppercase;
        text-align: center;
        line-height: 1em;
      }`, 
      google_fonts: 'Finger Paint'
    };
    console.log(payload)
  
    let headers = { 
      auth: {
        username: '0699a817-edcb-4997-9cf1-4b00ae5f5289',
        password: 'c5cf4969-de5a-4587-ac59-533cc37cd6dd'
      },
      headers: {
        'Content-Type': 'application/json',
        /* "Access-Control-Allow-Origin": "*", */
      }
    }
    try {
      const response = await axios.post('https://hcti.io/v1/image', JSON.stringify(payload), headers );
      console.log(response)
      dispatch(setImgUrl(response.data.url))
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <div id="downloadBtn" className={style.DownloadBtn}>
      <button id="download" className={style.btn} onClick={getMenu}>Crear imagen</button>
      {imgUrl !== '' &&
        <a id="linkGo" target='_blank' rel="noreferrer" className={`${style.btn} ${style.linkGo}`} href={imgUrl}>Guardar</a>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    optionText: state.optionText,
    styles: state.styles
  }
}

const dispatchStateToProps = {
  guisadoText,
  addOption,
}

export default connect(mapStateToProps, dispatchStateToProps)(CreateImage);
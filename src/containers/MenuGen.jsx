import React from 'react';
import { connect } from 'react-redux'
import Layout from './Layout';
import Interaccion from '../components/Interaccion';
import VistaPrevia from '../components/VistaPrevia';

const MenuGen = () => {

  return (

    <Layout> 
      <VistaPrevia />
      <Interaccion />
    </Layout>

  )
};


export default connect(null, null)(MenuGen);

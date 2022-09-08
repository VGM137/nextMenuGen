import React from 'react';
import { connect } from 'react-redux'
import Layout from './Layout';
import CreateOrder from '../components/CreateOrder';

const MyOrder = () => {

  return (
    <Layout> 
      <CreateOrder />
    </Layout>
  )
};


export default connect(null, null)(MyOrder);

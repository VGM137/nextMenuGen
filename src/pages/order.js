import Head from 'next/head';
import React from 'react';
import { connect } from 'react-redux';
import Layout from '../containers/Layout';
import MyOrder from '../containers/MyOrder';

const Order = () => {
  return (
    <>
      <Head>
        <title>Orders</title>
      </Head>
      <Layout>
        <MyOrder />
      </Layout>
    </>
  );
};

export default connect(null, null)(Order);

/* import Order  from "../containers/Order"

export default function Main() {
  return (
    <>
      <Order />
    </>
  )
} */

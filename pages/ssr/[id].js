import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Layout from '@/components/layout'

export default function SsrIndividual({ dataIndiv }) {
  const regresar = () => {
    window.history.back()
  }

  console.log(dataIndiv)
  return (
    <Layout>
      {!dataIndiv.name
        ? "CARGANDO"
        : <div className='container mt-4 p-4 col-6'>
          <div className='card text-center p-4 bg-light'>
            <h4>NAME: {dataIndiv.name}</h4>
            <p>UserName: {dataIndiv.username} </p>
            <p>Email: {dataIndiv.email} </p>
            <p>City: {dataIndiv.address.city} </p>
            <p>Company: {dataIndiv.company.name} <br/>
              (Bussiness: {dataIndiv.company.bs})
            </p>
          </div>
          <div className='d-flex justify-content-center mt-2'>
          <button onClick={regresar} className='btn btn-primary'>Back..</button>
          </div>
        </div>
      }
    </Layout>
  )
}

export async function getServerSideProps(context) {
  // ESTO ES UNA PARTE IMPORTANTE 
  var id = context.params.id
  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  const res = await fetch(url)
  const dataIndiv = await res.json()
  return {
    props: {
      dataIndiv: dataIndiv
    }
  }
}
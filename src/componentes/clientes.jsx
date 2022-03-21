import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query';

const URL_API = "https://my-bdd-server-nlngw9uco-jviejo.vercel.app"

function getClientes() {
  return axios.get(`${URL_API}/sql?sql=select * from customers limit 20`);
}

export default function Clientes() {
  const { isLoading, data} = useQuery('clientes', getClientes)
  
  if (isLoading){
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>Clientes actuales</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {data.data.map(clientes => (
            <tr key={clientes.customer_id}>
              <td>{clientes.customer_id}</td>
              <td>{clientes.company_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

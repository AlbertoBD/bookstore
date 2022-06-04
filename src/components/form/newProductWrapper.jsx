import React from 'react'
import NewProduct from './newProduct'
import { useParams } from 'react-router-dom'

export default function NewProductWrapper() {
    const { id } = useParams()
  return (
    <NewProduct id={id}/>
  )
}

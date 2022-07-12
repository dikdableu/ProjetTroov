import React from 'react'
import {useRouter} from 'next/router'

export default function Recettes() {

  const route = useRouter();

  return (
    <div>
        <h1>Ceci est la recette numéro {route.query.slug}</h1>
    </div>
  )
}

import React from 'react'
import EmergencyCategories from './emergency'
import MainCategories from './categories' 

export default function Home() {
  return (
    <div>
      <EmergencyCategories />
      <MainCategories />
    </div>
  )
}
import React from 'react'
import EmergencyCategories from './emergency'
import MainCategories from './categories' // নাম পরিবর্তন করুন

export default function Home() {
  return (
    <div>
      <EmergencyCategories />
      <MainCategories />
    </div>
  )
}
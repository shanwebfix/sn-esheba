import React from 'react'
import EmergencyCategories from './emergency'
import MainCategories from './categories'
import TodayRamadan from './TodayRamadan'
import TextSliderComponent from './Textslide'
import Imageslider from './Imageslide'
import AppDownloader from './AppDownload'
import Profile from './Profile'

export default function Home() {
  return (

    
    <div>
      <TextSliderComponent />
      <Profile />
      <TodayRamadan />
      
      <Imageslider />
      <EmergencyCategories />
      <MainCategories />
      <AppDownloader />
    </div>
  )
}
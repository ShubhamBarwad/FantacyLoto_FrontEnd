import React from 'react'
import Header from '../components/Header.js'
import SideNav from '../components/SideNav.js'
import DataBrick from '../components/DataBrick.js'
import PieBrick from '../components/PieBrick.js'
import Chart from '../components/Chart.js'
import Greeting from '../components/Greeting.js'

function Home() {
  return (
    <div className='home'>
        <Header/>
        <div className='flex-row'>
        <SideNav/>
        <div className="content">
          <div className="flex-row">
            <div className="data-brick-div grid">
              <DataBrick DataNumber='$8288.8' DataTitle='Balance available'/>
              <DataBrick DataNumber='7988' DataTitle='Total win tickets'/>
              <DataBrick DataNumber='$76' DataTitle='Total bet amount'/>
              <DataBrick DataNumber='$772' DataTitle='Total active lottries'/>
              <DataBrick DataNumber='$188' DataTitle='Total void amount'/>
              <DataBrick DataNumber='$88.9' DataTitle='Total payout amount'/>
              <DataBrick DataNumber='8288' DataTitle='Total ticket purchased'/>
              <DataBrick DataNumber='$1200' DataTitle='Avg sale/day'/>
            </div>
            <PieBrick/>
          </div>
          <Chart/>
        </div>
        </div>
      
        <Greeting/>
    </div>
  )
}

export default Home
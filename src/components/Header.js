import React from 'react'
import HBMenu from '../resources/drag_handle three.png'
import CliLogo from '../resources/logo.png'
import SettingImg from '../resources/settings.png'
import InfoImg from '../resources/info_outline.png'
import ProfileImg from '../resources/inner.png'

function Header() {
  return (
    <header className='flex-row align-items-center justify-content-between'>
        <div className='menu-logo-name-search flex-row align-items-center'>
            <img src={HBMenu} alt="" />
            <div className="logo-name flex-row align-items-center">
                <img src={CliLogo} alt="" />
                <h2 className="cli-name">FANTACY LOTO</h2>
            </div>
            <input className='box search-bar' type="text" name="search" id="search" placeholder='Search User...' />
        </div>
        
        <div className="other-menu flex-row align-items-center">
            <img src={SettingImg} alt="" />
            <img src={InfoImg} alt="" />
            <div className="profile flex-row align-items-center">
                <img src={ProfileImg} alt="" />
                <div>
                    <p className="first-name">Alexandra</p>
                    <p className="last-name">Samantha</p>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
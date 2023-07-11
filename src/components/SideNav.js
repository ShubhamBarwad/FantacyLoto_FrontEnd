import React from 'react'
import PieImg from '../resources/pie_chart_outline.png'
import AdminImg from '../resources/admin_panel_settings.png'
import PeopleImg from '../resources/people.png'
import AgentImg from '../resources/support_agent.png'
import MoentImg from '../resources/monetization_on.png'
import GameImg from '../resources/sports_esports.png'
import LotteryImg from '../resources/insights.png'
import BetnumImg from '../resources/multiline_chart.png'
import CategoryImg from '../resources/category.png'
import WinRatioImg from '../resources/aspect_ratio.png'
import ManualWinImg from '../resources/Frame.png'
import RulesImg from '../resources/rule.png'
import ReportImg from '../resources/file_copy.png'
import StateImg from '../resources/apartment.png'
import Logo2 from '../resources/logo2.png'

function SideNav() {
  return (
    <nav className='navbar flex-col justify-content-between'>
        <div>
            <div className="nav-item">
                <img src={PieImg} alt="" />
                <p className="nav-text">Dashboard</p>
            </div>
            <div className="nav-item">
                <img src={AdminImg} alt="" />
                <p className="nav-text">Admins</p>
            </div>
            <div className="nav-item">
                <img src={PeopleImg} alt="" />
                <p className="nav-text">Staff</p>
            </div>
            <div className="nav-item">
                <img src={AgentImg} alt="" />
                <p className="nav-text">Agents</p>
            </div>
            <div className="nav-item">
                <img src={MoentImg} alt="" />
                <p className="nav-text">Balance</p>
            </div>
            <div className="nav-item">
                <img src={GameImg} alt="" />
                <p className="nav-text">Games</p>
            </div>
            <div className="nav-item">
                <img src={LotteryImg} alt="" />
                <p className="nav-text">Lottery Limit</p>
            </div>
            <div className="nav-item">
                <img src={BetnumImg} alt="" />
                <p className="nav-text">Bet Number limit</p>
            </div>
            <div className="nav-item">
                <img src={CategoryImg} alt="" />
                <p className='nav-text'>Bet type & Win ratio</p>
            </div>
            <div className="nav-item">
                <img src={WinRatioImg} alt="" />
                <p className="nav-text">Winning Ratio</p>
            </div>
            <div className="nav-item">
                <img src={ManualWinImg} alt="" />
                <p className="nav-text">Manual win results</p>
            </div>
            <div className="nav-item">
                <img src={RulesImg} alt="" />
                <p className="nav-text">Rules</p>
            </div>
            <div className="nav-item">
                <img src={ReportImg} alt="" />
                <p className="nav-text">Reports</p>
            </div>
            <div className="nav-item">
                <img src={StateImg} alt="" />
                <p className="nav-text">State/City</p>
            </div>
        </div>
        <div className='qt-div nav flex-row align-items-center'>
            <img className='qt-logo' src={Logo2} alt="QTlogo" />
            <div className='qt-text'>
                <p>Developed by</p>
                <p>QualyTrust IT Services, India</p>
            </div>
        </div>
    </nav>
  )
}

export default SideNav
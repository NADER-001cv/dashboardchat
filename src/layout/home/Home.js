import React from 'react'
import './home.css'
import Header from '../../components/socialpagehome/header/Header'
import Welcome from '../../components/socialpagehome/welcomtophomepage/Welcome'
import Card from '../../components/socialpagehome/card/Card'

import LiveMessage from '../../components/socialpagehome/livemeesage/LiveMessage'
import AllChatMessengerContent from '../../components/socialpagehome/contentmiddle/AllChatMessengerContent'
import AccordingChat from '../../components/socialpagehome/accordingchat/AccordingChat'
import FooterCardHome from '../../components/socialpagehome/footerhome/FooterCardHome'

function Home() {

    return (
        <div className="container-fluid allhome">
        <div className="home">
            <div classNam="  home_postion">
            <Header/> 
            <Welcome/>
              <Card/>
                <LiveMessage/>
                    <AllChatMessengerContent/>
                <AccordingChat/>
                <FooterCardHome/>
            </div>
        </div>
        </div>
    )
}

export default Home

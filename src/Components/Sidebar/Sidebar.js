import React from 'react'
import "../styles/Sidebar/Sidebar.scss"
import {
    AiOutlineNumber,
    AiOutlineFileSearch,
    AiOutlineTwitter,
    AiFillHome,
    AiOutlineMail,
    AiOutlineUser,
    AiOutlineMore,
    AiOutlineBell,
    AiOutlineOrderedList,

} from "react-icons/ai"
import { Button } from 'react-bootstrap'
import SidebarProfile from './SidebarProfile'
import TweetBtn from '../TweetBtn/TweetBtn'



const Sidebar = () => {

    const menuButtonClick = (e) => {
        e.preventDefault();
    }


    return (
        <div className="d-flex justify-content-between flex-column col-2 col-md-3 sidebar sticky-top">
            <div className="d-flex flex-column" >

                <Button href="!#" className="twitterBtn">
                    <AiOutlineTwitter />
                </Button>


                <Button onClick={menuButtonClick} className="sidebarBtn d-flex align-items-center">
                    <AiFillHome />
                    <p className="ml-3 d-none d-lg-block" >Ana Sayfa</p>
                </Button>

                <Button onClick={menuButtonClick} href="!#" className="sidebarBtn d-flex align-items-center ">
                    <AiOutlineNumber />
                    <p className="ml-3  d-none d-lg-block" >Keşfet</p>
                </Button>

                <Button onClick={menuButtonClick} href="!#" className="sidebarBtn d-flex align-items-center">
                    <AiOutlineBell />
                    <p className="ml-3 d-none d-lg-block " >Bildirimler</p>
                </Button>

                <Button onClick={menuButtonClick} href="!#" className="sidebarBtn d-flex align-items-center">
                    <AiOutlineMail />
                    <p className="ml-3  d-none d-lg-block" >Mesajlar</p>
                </Button>

                <Button onClick={menuButtonClick} href="!#" className="sidebarBtn d-flex align-items-center">
                    <AiOutlineFileSearch />
                    <p className="ml-3 d-none d-lg-inline" >Yer İşaretleri</p>
                </Button>

                <Button onClick={menuButtonClick} href="!#" className="sidebarBtn d-flex align-items-center">
                    <AiOutlineOrderedList />
                    <p className="ml-3 d-none d-lg-block" >Listeler</p>
                </Button>

                <Button onClick={menuButtonClick} href="!#" className="sidebarBtn d-flex align-items-center ">
                    <AiOutlineUser />
                    <p className="ml-3 d-none d-lg-block" >Profil</p>
                </Button>

                <Button onClick={menuButtonClick} href="!#" className="sidebarBtn d-flex align-items-center ">
                    <AiOutlineMore />
                    <p className="ml-3 d-none d-lg-block" >Daha fazla</p>
                </Button>

                <TweetBtn type={"tweeterBtn"} />

                <Button onClick={menuButtonClick} href="!#" className="tweeterBtn mt-3 d-block d-md-none">
                    +
                </Button>
            </div>

            <SidebarProfile />



        </div>
    )
}

export default Sidebar

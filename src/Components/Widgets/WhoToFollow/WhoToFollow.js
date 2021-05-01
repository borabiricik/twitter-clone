import React from 'react'
import "./WhoToFollow.scss"
import users from "../../../users/tweets"
import img from "../../../users/img/bora.jpeg"

var randomUsers = [];

for (let i = 0; i < 3; i++) {
    randomUsers[i] = users[i];

}




const WhoToFollow = () => {
    return (
        <div className="whotofollow mt-2  p-0">
            <ul className="userList " >
                <h4 className="p-3 card-text" >Kimi Takip Etmeli</h4>
                {
                    randomUsers.map((user) =>
                        <li key={user.user.username} className="row align-items-center py-3 px-2 card-text no-gutters justify-content-between">
                            <div className="d-flex ">
                                <img className="mr-2" src={img} alt="" />
                                <div className="d-flex flex-column">
                                    <p>{user.user.name}</p>
                                    <span>@{user.user.username}</span>
                                </div>
                            </div>

                            <button className="follow-button">Takip Et</button>

                        </li>
                    )
                }

                <a href="!#" className="showMoreBtn text-center w-100 d-block">
                    Daha Fazla Gör
                </a>
            </ul>

        </div>
    )
}

export default WhoToFollow

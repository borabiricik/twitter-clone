import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./TopTen.scss"


const TopTen = () => {

    const showMoreBtnClick = (e) =>{
        e.preventDefault();
    }


    return (
            <Card className="d-flex flex-column mt-2 toptenCard"  >
                <Card.Header className="toptenHeader" >
                    İlgini Çekebilecek Gündemler
                </Card.Header>
                <Card.Text>
                    #BoktanÜlkeGündemi
                </Card.Text>
                <Card.Text>
                    #TayyipŞöyle
                </Card.Text>
                <Card.Text>
                    #TayyipBöyle
                </Card.Text>
                <Card.Text>
                    #AtamSenKalkBenYatam
                </Card.Text>
                <Card.Text>
                    #EsraKabeBulucuAppYaz
                </Card.Text>
                <Card.Text>
                    <Button onClick={showMoreBtnClick} href="/" className="showMoreBtn" >
                        Daha Fazla Göster
                    </Button>
                </Card.Text>
            </Card>
    )
}

export default TopTen

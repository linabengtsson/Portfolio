import React from 'react';
import HomeView from '../views/homeView';

const h = React.createElement;

function HomePresenter() {
    const [modalShow, setModalShow] = React.useState(false)
    const [title, setTitle] = React.useState("Title")
    const [image1, setImage1] = React.useState([])
    const [image2, setImage2] = React.useState([])
    const [image3, setImage3] = React.useState([])
    const [text, setText] = React.useState("Text")
    const [file, setFile] = React.useState("0")
    const [buttonName, setButtonName] = React.useState("0")

    return h(HomeView, {modalShow, setModalShow, title, setTitle,
                        image1, setImage1, image2, setImage2, image3, setImage3,
                        text, setText, file, setFile, buttonName, setButtonName
    })
 
}

export default HomePresenter;
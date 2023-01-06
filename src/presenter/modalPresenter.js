import React from 'react';
import ModalView from '../views/modalView';

const h = React.createElement;

function ModalPresenter(props) {

    function showPdf () {
        if (props.file !== "0") {
           return <button class="buttons"><a href={props.file} target="_blank"> {props.buttonName} </a></button>
        }
        else return ""
    }

    return h(ModalView, {props, showPdf})
}

export default ModalPresenter;
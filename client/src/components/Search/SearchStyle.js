import styled from 'styled-components'

import background from './Images/background.png'

export const Container = styled.div`

    height: 100vh;

    .map-container {
        height: 86vh;
    }

    .map-container .hotel-pin {

        color: pink;
        font-size: 25px;
        background-color: #3e785d;
        padding:5px;
        border-radius: 10px;

    }

    .mapboxgl-ctrl {

        margin: 100px 20px;
        background:none;

    }

    .mapboxgl-ctrl button{

        display: inline;
        margin: 10px;
        border: none;

    }

    .map-container .trip-options {

        position: absolute;
        top: 130px;
        margin: 10px ;
        background-color: rgb(255, 255, 255, 0.8);
        width: 300px;
        height: 70%;
        border-radius: 30px;
        overflow-y:auto

    }

    .map-container .trip-options .trip-options-option {

        /* padding: 10px; */
        cursor: pointer;
        transition: ease background-color 0.2s;
        padding: 0 0 15px 0;

    }

    .map-container .trip-options .trip-options-option h3, h4, p {

        padding: 0 10px;

    }

    .map-container .trip-options .trip-options-option:hover {

        background-color: rgb(225, 225, 225);
        transition: ease background-color 0.2s;


    }

    .trip-options-option img {
       max-width: 100%;
       height: 50%;
       border-radius: 0;
    }

    @media screen and (max-width: 800px) {
        
        .Main {

            display: grid;
            grid-template-columns: none;
            grid-template-rows: 8fr 2fr;
            grid-template-areas: "map"
                                 "sidebar";

        }

        .map-container {

            height: 70vh;

        }

        .mapbox{
            height: 1px;
        }

        .map-container .trip-options {

            position: static;
            width: 100vw;
            margin: 0;
            padding:0;
            border-radius: 0;
            overflow-y:visible
            
        }

    }

`;

export const Main = styled.div`

    display: grid;
    grid-template-columns: 1.8fr 8.2fr;
    grid-template-areas: "sidebar map";
    height: 85vh;

    .filter-btn {
        position: absolute;
        top:650px;
        left:85px;
        width: 100px;
        height: 50px;
        border-radius: 30px;
        border: none;
        background-color: rgb(104, 163, 233);
        color: white;
    }

    .filter-btn:hover {
        cursor: pointer;
    }

    .sidebar {

        grid-area: sidebar;
        background-color: rgb(237, 237, 237);
        height: 100%;

    }

    .map {
        grid-area: map;
    }

    .map form {
        position: absolute;
        top: 100px;
        right: 0;
        float:right;
        margin: 20px 20px 0 0;
    }

    .map input {
        width: 200px;
        height: 40px;
        border: none;
        border-radius:30px 0 0 30px; //last one 30px 
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0 0 0 15px;
        outline: none;
    }

    .map .mapboxgl-ctrl-top-right {
        position: relative;
        top: 150px;
    }

    .map .options {

        position: absolute;
        top: 150px;
        right: 50px;
        float:right;
        margin: 20px 20px 0 0;
        width: 215px;
        background-color: white;
        border-radius:30px 30px 30px 30px; //last one 30px 
        height: fit-content;

    }

    .map .options ul {

        list-style: none;
        margin: 0;
        padding:0 10px;
        width: fit-content;

    }

    .map .options ul li {

        margin: 10px 0;
        padding:5px 0;

    }

    .map .options ul li:hover {
        background-color: rgb(237, 237, 237);
        cursor: pointer;

    }

    .map button {
        width: 50px;
        height: 42px;
        border: none;
        background-color: rgb(84,165,228);
        vertical-align: middle;
        border-radius:0 30px 30px 0; 
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }

    .search-icon {

        color:white;
        vertical-align: middle;
        font-size: 27px;

    }

    .zoom-buttons {

    position: absolute;
    top: 170px;
    right: 30px;
    color:red;

    }

    .zoom-buttons button {

    border-radius: 10px 10px 10px 10px;
    margin: 10px 10px;
    cursor: pointer;

    }

    @media screen and (max-width: 675px) {
        
        .map .mapboxgl-ctrl-top-right {
        top:445px;
        right:250px;
    }

    }

`;
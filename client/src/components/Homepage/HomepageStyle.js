import styled from "styled-components"

import img from './Images/background.jpg'

export const Container = styled.div`

    background-image: url(${img});
    background-position: center;
    background-size: cover;
    height: 100vh;

`

export const Grid = styled.div`

    display: grid;
    height: 85vh;
    grid-template-rows: 2.5fr 1.5fr;
    grid-template-areas: "search"
                         "intro";

`;

export const Search = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: search;

    input {
        width: 500px;
        height: 50px;
        border: 1px rgb(83,166,228) solid;
        background-color: rgb(83,166,228, 0.5);
        border-radius: 10px 0 0 10px;
        font-size: 20px;
        padding: 0 0 0 10px;
        color:white;
    }

    input::placeholder {
    color:rgb(255, 255, 255);
    }

    button {
        width: 75px;
        height: 52px;
        border: none;
        border-radius: 0 10px 10px 0;
        color:white;
        background-color: rgb(83,166,228);
        font-size: 20px;
        cursor: pointer;
        transition: 0.3s background-color ease;
    }

    @media screen and  (max-width: 675px) {
    input{
        width: 80vw;
        height: 6vh;
    }
    button {
    height: 6.2vh;

    }
}

`;

export const Intro = styled.div`

    grid-area: intro;
    font-family: century-gothic,sans-serif;
    font-weight: 400;
    font-style: normal;
    display: grid;
    grid-template-columns: 8fr 2fr;
    margin:15px;
    grid-gap: 10px;
    position: relative;

    p {

        color: white;
        font-size: 25px;

    }

    span {

        color:grey;
        position: absolute;
        bottom:50px;
        right:50px;

    }

`
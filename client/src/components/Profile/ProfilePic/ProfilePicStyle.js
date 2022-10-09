import styled from "styled-components";

import img from './Images/profile-pic.png'


export const Container = styled.div`

    /* background-image: url(${img}); */
    background-image: url(${props => props.profilePictureURL});
    background-position: center;
    background-size: cover;
    height: ${props => props.size};
    width: ${props => props.size};
    border-radius: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin-top: auto;
    font-family: century-gothic,sans-serif;
    font-weight: 400;
    font-style: normal;
    border: ${props => props.border};
    span {

        color: black;
        margin-top: auto;
        margin-bottom: 20px;
        padding: 2px 20px;
        font-size: 10px;
        background-color: rgb(255,255,255,0.5);
        cursor: pointer;
    }

`
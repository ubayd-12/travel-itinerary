import styled from "styled-components";

// import image from './Images/image.jpg'

export const Container = styled.div`

    width: 450px;
    max-width: 375px;

    position: relative;

    .image {
        background-color: black;
        height: 150px;
        width: 100%;
        border: 1px black solid;
        color:white;
        position: relative;
    }

    .image-text {

        position: absolute;
        top: 120px;
        right:20px;
        color: white;

    }

    .image span {

        position: absolute;
        bottom: 10px;
        right: 15px;
        font-weight: 100;

    }

    .info {

        background-color: white;
        border: 1px black solid;
        height: fit-content;
        width: 100%;
        

    }


    .info div {

        margin: 15px 10px;

        h4 {

            display: inline;
            margin-right: 5px;
            font-weight: 300;

        }

        span {

            color: #626262;

        }

    }

`;
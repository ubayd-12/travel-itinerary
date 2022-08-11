import styled from 'styled-components'

import background from './Images/background.png'

export const Container = styled.div`

    height: 100vh;

    @media screen and (max-width: 675px) {
        
        .Main {
            grid-template-columns: none;
            grid-template-rows: 100% 0%;
            grid-template-areas: "map"
                                 "sidebar";
        }

        .Main .sidebar {

            position: absolute;
            top:150px;
            width: 50vw;
            background-color: rgb(237, 237, 237, 0.8);
            border-radius: 10%;
            
        }

    }

`;

export const Main = styled.div`

    display: grid;
    grid-template-columns: 1.8fr 8.2fr;
    grid-template-areas: "sidebar map";
    height: 85vh;

    .sidebar {

        grid-area: sidebar;
        background-color: rgb(237, 237, 237);

    }

    .map {
        grid-area: map;
        background-color: red;
        background-image: url(${background});
        background-position: center;
        background-size: cover;
    }

    .map form {
        float:right;
        margin: 20px 20px 0 0;
    }

    .map input {
        width: 200px;
        height: 40px;
        border: none;
        border-radius:30px 0 0 30px; 
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 0 0 0 15px;
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

`;
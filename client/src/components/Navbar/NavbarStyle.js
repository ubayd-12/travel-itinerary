import styled from "styled-components"

export const Nav = styled.div`

    background-color: ${props => props.bg || undefined};

    display: flex;
    align-items: center;

    img {
        width: 250px;
    }

    button {

        width: 8rem;
        height: 3.5rem;
        border-radius: 2em;
        font-size: 20px;
        color: white;
        background-color: rgb(84,165,228);
        border: 1px rgb(83,166,228, 0.0) solid;
        font-family: century-gothic,sans-serif;
        font-weight: 400;
        font-style: normal;
        cursor: pointer;
        transition: 0.3s background-color ease;
        /* margin: 15px; */

    &:hover {
        background-color: rgb(83,166,228, 0.1);
        border: 1px rgb(83,166,228) solid;
        transition: 0.3s background-color ease;
    };

    }

    .options {

        display: flex;
        align-items: center;
        margin-left:auto;
    }

    .options a {

        text-decoration: none;

    }

    .options > *{

        margin: 0 15px;

    }

    @media screen and (max-width: 750px) {

        .options > *{

            margin: 0 10px;

            }
        
    }

`;
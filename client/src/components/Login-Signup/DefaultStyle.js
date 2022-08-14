import styled from "styled-components";

import background from './images/background.jpg'

export const Container = styled.div`

    background-image: url(${background});
    background-position: center;
    background-size: cover;
    background-color: black;
    height: calc(100vh - 100px);
    max-height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-signup-box {

        height: fit-content;
        padding:10px;
        width: 450px;
        background-color: rgb(83, 165, 228,0.8);
        border-radius:25px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin: auto;
        color: white;
    
        .login-signup-text {

            text-align: center;
            padding: 10px;
            font-size: 25px;
            font-weight: 100;

        }

        form {

            width: fit-content;
            margin: 20px auto;
            padding: 20px 0;
            border-top: 1px white solid;
            position: relative;

        }

        form div {



        }

        form label {

            display: block;
            text-align: center;
            margin: 10px 0;

        }

        form input {

            border: 1px white solid;
            background-color: rgb(83, 165, 228,0.1);
            color: white;
            padding: 15px;
            border-radius: 13px;
            width: 180px;

        }

        form input::placeholder {

            color: white;

        }

        form .username-field {


            
        }

        form .password-field {



        }

        form .click-to-signup-login {

            font-weight: 100;
            margin-top: 10px;
            cursor: pointer;
            color: white;

        }

        .click-to-signup-login a:-webkit-any-link{

            text-decoration: dashed

        }

        form .login-signup-button {
            width: fit-content;
            font-size: 25px;
            margin: 20px 0;
            border: 1px white solid;
            padding: 15px;
            background-color: rgb(83, 165, 228,0.2);
            color: white;
            border-radius: 15px;
            cursor: pointer;

        }

    }

    .location {

        color:white;
        position: fixed;
        bottom:50px;
        right:50px;

    }

`;

export const LoginSignupWithContainer = styled.div`

    width: fit-content;
    margin: 10px auto;
    border: 1px white solid;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;

    .text {

    }

    .logo {

        vertical-align: middle;
        margin-left: 5px;

    }


`
import styled from "styled-components";

import img from './images/background.jpg'

export const Container = styled.div`

height: calc(100vh - 103.5px);
background-image: url(${img});
-webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

.msg {
    position: relative;
    left:23%;
    top:23%;
    height: max-content;
    background-color: rgba(104,163,223, 0.7);
    width: fit-content;
    padding: 20px;
    border-radius: 30px;
    color:white;
    text-align: center;
}

.msg .email {
    font-weight: bold;
    color:rgb(209, 209, 209);
}

.msg .redirect{

    margin: 20px;
    border: none;
    color:white;
    background-color: grey;
    width: 250px;
    height: 50px;
    border-radius: 10px;
    font-size: 17px;

}

.msg .redirect:hover {

    cursor: pointer;

}

.success-email, .success-family, .success-login {

text-align: center;

}

`
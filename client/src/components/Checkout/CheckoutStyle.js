import styled from "styled-components";

export const Container = styled.div`

//




//
    display: grid;
    grid-template-columns: 65% 35%;
    .test {

        margin: 50px;
        display: flex;
        justify-content: center;
        position: fixed;
        right: 25px;
    }

    @media screen and (max-width: 1220px) {
        
        .test {

            position: static;

        }

    }

    @media screen and (max-width: 675px){
        
        grid-template-columns: none;

        * {

            margin: 0;

        }

    }

`;

export const CheckoutDiv = styled.div`

    font-weight: 400;
    margin: 50px;
    background-color: rgb(240,240,240);
    height: fit-content;
    padding: 25px;

    @media screen and (max-width: 675px) {
        
        margin: 10px;

    }
    
    .indent {

        margin: 10px 10px 10px 50px;

    }

    @media screen and (max-width: 675px){

        .indent {

            margin: 10px;

        }

    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .bold {

        font-weight: bold;

    }

    .fine-print {

        

    }

    .hotel-protection {

        height: fit-content;

    }

    .hotel-protection-shield {

        font-size: 25px;
        color: rgb(31,149,72);
        margin-right: 5px;

    }

    .hotel-protection h1 {

        display: inline;
        margin-right: 15px;
        font-weight: 200;

    }

    .hotel-protection .badge-recommended {

        color:white;
        padding: 8px;
        border-radius: 12px;
        background-color: rgb(31,149,72);
        

    }

    .hotel-protection .important-info {

        margin: 20px 0;
        padding: 15px 15px;
        background-color:white;
        border: 1px #707070 solid;
        color: #717171;

    }
    
    .reimbursement {

        margin: 20px 0;
        padding: 15px 15px;
        background-color:white;
        border: 1px #707070 solid;
        color: #717171;

    }

    .reimbursement span {

        display: block;
        margin: 5px 0;

    }

    .reimbursement .bullet{

        margin-left: 10px;

    }

    .hotel-protection h2 {

        font-weight: 200;
        margin-bottom: 15px;

    }

    .hotel-protection form input{

        

    }

    .hotel-protection .accept-protection {

        margin-bottom: 15px;
        background-color:#E8FFF3;
        padding: 20px 10px;
        font-size: 25px;

        label {

            margin-left: 20px;

        }

        input {

            transform: scale(1.2);
            margin-left: 5px;

        }

        .protection-price {

            float: right;

        }

        .protection-price span{
            
            display: block;

        }

        .protection-price .price {

            text-align: center;
            font-size: 18px;
            font-weight: bolder;
            
        }

        .protection-price .per-person {

            text-align: center;
            font-size: 12px;
            color: #A2A2A2;

        }

    }

    .hotel-protection .decline-protection {

        margin-bottom: 15px;
        background-color:#FFEAEA;
        padding: 20px 10px;
        font-size: 25px;

        label {

            margin-left: 20px;

        }

        input {

            transform: scale(1.2);
            margin-left:5px;

        }

    }

    .payment {

        .payment-card {

            font-size: 25px;
            color: #1F6C95;
            margin-right: 5px;

        }

        h1 {

            display: inline;
            margin-right: 15px;
            font-weight: 200;

        }

        .badge-secure {

            color:white;
            padding: 8px;
            border-radius: 12px;
            background-color: #1F6C95;

        }

        form {

            margin: 20px 0;

        }

    }

    .complete-booking {

        .manage-booking {

            display: block;

        }

        .manage-booking h1 {

            font-weight: 100;
            margin-bottom: 10px;

        }

        .manage-booking div {

            margin-bottom: 15px;

        }

        .manage-booking div label {

            color:#717171;
            display: block;
            margin-bottom: 5px;
            font-size: 19px;

        }

        .manage-booking div input {

            height:30px;
            padding: 0px 10px;
            font-size: 19px;
            font-weight: 100;

        }

        input::placeholder {

        font-weight: 100;
        font-size: 17px;

        }

        .important-info-title {

            font-weight: 100;
            margin-bottom: 15px;

        }

        .important-info-bullets {

            background-color: white;
            border: 1px #707070 solid;
            padding:15px 20px;
            font-size:15px;
            color:#707070;
            margin-bottom: 15px;

        }

        .important-info-bullets p {

            margin-bottom: 20px;

        }

        .complete-booking-btn {

            border: none;
            width: fit-content;
            padding: 20px 15px;
            font-size: 25px;
            font-weight: bold;
            color:white;
            background-color: #53A6E4;
            border-radius: 15px;
            cursor: pointer;
            text-align: center;

        }

        .complete-booking-arrow {

            vertical-align: middle;
            margin-left: 5px;

        }

}


`;

//margin: 20px 0;
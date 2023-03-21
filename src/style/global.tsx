import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        border: 0;
        box-sizing:border-box;
        vertical-align: baseline;
        font-size: 100%;
    }
:root{
    //--
}
a{
    text-decoration: none;
}
ul, ol, li{
    list-style: none;
}
button{
    cursor: pointer;
    border: none;
}
`;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        border: 0;
        box-sizing: border-box;
        vertical-align: baseline;
        font-size: 100%;
    }
:root{
    --default: #f8f8f8;
    --decor: #ffc900;

    --gray0: #f3f3f3;
    --gray1: #6f5b61;
    --gray2: #222222; //title
    --gray3: #e9e9e9; //post cards

    --title: 'Montserrat', sans-serif;
    --content: 'Merriweather', serif;

    --fs-xl: clamp(1.5rem, 8vw, 2.2rem);
    --fs-lrg: 1.8rem;
    --fs-xm: 1.9rem;
    --fs-mid: 1.2rem;
    --fs-sml: 0.9rem;
    --fs-xs: 0.8rem;

    @media (min-width: 1300px) {
    h1{
        font-size: var(--fs-xm);
    }
    p{
        font-size: var(--fs-mid);
    }
   }
}
body{
    background-color: var(--default);
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
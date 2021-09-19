import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --background-light-color: #F1F1F1;
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.1rem;
    
}
body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}
h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}
span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}
//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}
//Floting Toggler
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 4.5rem;
    height: 1.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }
  //Nav Toggler
  .navbar {
    background-color: #007bff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 20;
  }
  
  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
  }
  
  .nav-logo {
    color: #10121A;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
  }
  
  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
  }

  .nav-links {
    color: #000;
    font-weight:bold;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
  }
  .fa-code {
    margin-left: 1rem;
  }
  
  .nav-item {
    margin-right: 1rem;
  }
  
  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }
  
  .nav-item:hover:after {
    width: 100%;
    background: #ffdd40;
  }
  
  .nav-item .active {
    color: #ffdd40;
  }
  
  .nav-icon {
    display: none;
  }
  
  @media screen and (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1pxsolid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }
  
    .nav-menu.active {
      background: #007bff;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: #ffdd40;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }
    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #ffdd40;
    }
  }
//Global Media Queries

`;

export default GlobalStyle;
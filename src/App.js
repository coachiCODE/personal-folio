import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from '@material-ui/core/Switch'
import NavbarComp from "./Components/Navbar"
import { BrowserRouter as Router, Switch as Switching, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import AboutPage from './Pages/AboutPage';
import FolioPage from './Pages/FolioPage';
import ContactPage from './Pages/ContactPage';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    if(theme === 'light-theme'){
      setTheme('dark-theme');
      setChecked(false)
    }else{
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <MainContentStyled>
    <div className="App">
    <Router>
      <NavbarComp />
      <Switching>
        <Route path='/' exact component={LandingPage} />
        <Route path='/LandingPage' exact component={LandingPage} />
        <Route path='/AboutPage' component={AboutPage} />
        <Route path='/FolioPage' component={FolioPage} />
        <Route path='/ContactPage' component={ContactPage} />
      </Switching>
    </Router>
          <div className="theme">
          <div className="light-dark-mode">
              <div className="right-content">
                <Switch
                  checked={checked}
                  color="primary"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  onClick={themeToggler}
                />
              </div>
            </div>       
        </div>
    </div>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 0rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;

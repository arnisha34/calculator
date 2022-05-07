import { useState } from "react";
import Calculator from "./components/Calculator";
import styled from 'styled-components'


function App() {

  const [theme, setTheme] = useState("theme1")

  const handleThemes = () => {
    if(theme === "theme1"){
      setTheme("theme2")
      console.log(theme)
    }else if(theme === "theme2"){
      setTheme("theme3")
      console.log(theme)
    }else if(theme === "theme3"){
      setTheme("theme1")
      console.log(theme)
    }
  }

  return (
    <AppContainer className={`App ${theme}`}>
      <CalcContainer>
        <CalcHeader>
          <Logo><span>calc</span></Logo>
          <ThemeToggler>
            <span>Theme</span>
            <ThemeSlider>
              <div className="themes">
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <div className={`slider-btn ${theme}`} onClick={handleThemes}></div>
            </ThemeSlider>
          </ThemeToggler>
        </CalcHeader>
        <Calculator theme={theme}/>
      </CalcContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  &.theme1{
    background-color: var(--theme1-bg);
    color: var(--theme1-font-color);
  }

  &.theme2{
    background-color: var(--theme2-bg);
    color: var(--theme2-font-color);
  }
  
  &.theme3{
    background-color: var(--theme3-bg);
    color: var(--theme3-font-color);
  }
`
const CalcContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 540px;
  width: 100%;

  @media screen and (max-width: 576px){
    padding: 20px;
  }
`
const CalcHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.25rem;
`
const Logo = styled.div`
  span{
    font-size: 2em;
    line-height: 0;
  }
`
const ThemeToggler = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span{
    align-self: flex-end;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    margin-bottom: 3px;
    text-transform: uppercase;
  }
`

const ThemeSlider = styled.div`
  .themes{
    span{
      padding: 0 8px;
    }
  }

  .theme1.slider-btn{
    background-color: var(--theme1-num-cont);
  }

  .theme2.slider-btn{
    background-color: var(--theme2-num-cont);
  }

  .theme3.slider-btn{
    background-color: var(--theme3-num-cont);
  }

  .slider-btn{
    border-radius: 20px;
    position: relative;
    width: 70px;
    height: 25px;
    
    ::before{
      content: "";
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 5px;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
    }

    &.theme1::before{
      animation-name: slide-theme-1;
      animation-duration: 0.5s;
      background-color: var(--theme1-red-bg);
      border: 1px solid var(--theme1-red-bg);
    }

    &.theme2::before{
      animation-name: slide-theme-2;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      background-color: var(--theme2-orange-bg);
      border: 1px solid var(--theme2-orange-bg);
    }

    &.theme3::before{
      animation-name: slide-theme-3;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      background-color: var(--theme3-turquoise-bg);
      border: 1px solid var(--theme3-turquoise-bg);
      left: 25px;
    }
  }

  /* Toggle Animations */

  @keyframes slide-theme-1{
    0%{
        left: 45px; 
    }
    100%{
        left: 5px;
    }
  }

  @keyframes slide-theme-2{
    100%{
       left: 25px; 
    }
  }

  @keyframes slide-theme-3{
    100%{
       left:45px; 
    }
  }
`

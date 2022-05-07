import React, { useState } from 'react'
import styled from 'styled-components'

export default function Calculator({theme}) {

  const [calc, setCalc] = useState("") 

  const updateCalc = (value) => {
    setCalc(calc + value)
  }

  const add = () => {
    const nums = calc.split("+").map(num => Number(num))
    const addNums = nums.reduce((prevNum, currNum) => prevNum + currNum)
    setCalc(addNums.toString())
  }

  const subtract = () => {
    const nums = calc.split("-").map(num => Number(num))
    const subNums = nums.reduce((prevNum, currNum) => prevNum - currNum)
    setCalc(subNums.toString())
  }

  const multiply = () => {
    const nums = calc.split("x").map(num => Number(num))
    const mulNums = nums.reduce((prevNum, currNum) => prevNum * currNum)
    setCalc(mulNums.toString())
  }

  const divide = () => {
    const nums = calc.split("/").map(num => Number(num))
    const divNums = nums.reduce((prevNum, currNum) => prevNum / currNum)
    setCalc(divNums.toString())
  }

  const remove = () => {
    setCalc(calc.substring(0, calc.length - 1))
  }

  const reset = () => {
    setCalc("")
  }

  const total = () => {
    console.log(calc)
    if(calc.includes("+")){
      add()
    }else if(calc.includes("-")){
      subtract()
    }else if(calc.includes("x")){
      multiply()
    }else if(calc.includes("/")){
      divide()
    }
  }

  return (
    <Calc>
      <CalcDisplay className={`display ${theme}`}>
        <span>{calc || "0"}</span>
      </CalcDisplay>
      <CalcNumContainer className={`calcNumCont ${theme}`}>
        <CalcNums>
          <div className={`short-btns ${theme}`}>
            <button className="btn" onClick={() => updateCalc("7")}>7</button>
            <button className="btn" onClick={() => updateCalc("8")}>8</button>
            <button className="btn" onClick={() => updateCalc("9")}>9</button>
            <button className="btn del-btn" onClick={remove}>del</button>
            <button className="btn" onClick={() => updateCalc("4")}>4</button>
            <button className="btn" onClick={() => updateCalc("5")}>5</button>
            <button className="btn" onClick={() => updateCalc("6")}>6</button>
            <button className="btn" onClick={() => updateCalc("+")}>+</button>
            <button className="btn" onClick={() => updateCalc("1")}>1</button>
            <button className="btn" onClick={() => updateCalc("2")}>2</button>
            <button className="btn" onClick={() => updateCalc("3")}>3</button>
            <button className="btn" onClick={() => updateCalc("-")}>-</button>
            <button className="btn" onClick={() => updateCalc(".")}>.</button>
            <button className="btn" onClick={() => updateCalc("0")}>0</button>
            <button className="btn" onClick={() => updateCalc("/")}>/</button>
            <button className="btn" onClick={() => updateCalc("x")}>x</button>
          </div>
          <div className={`long-btns ${theme}`}>
            <button className="reset-btn" onClick={reset}>reset</button>
            <button className="equal-btn" onClick={total}>=</button>
          </div>
        </CalcNums>
      </CalcNumContainer>
    </Calc>
  )
}

const Calc = styled.div`
`
const CalcDisplay = styled.div`
  &.display.theme1{
    background-color: var(--theme1-display);
  }

  &.display.theme2{
    background-color: var(--theme2-display);
  }

  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.5em;
  letter-spacing: 0.1em;
  padding: 30px;
  height: 125px;

  @media screen and (max-width: 576px){
    height: 100px;
  }
`
const CalcNumContainer = styled.div`
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  margin-top: 20px;

  &.theme1{
    background-color: var(--theme1-num-cont);
  }

  &.theme2{
    background-color: var(--theme2-num-cont);
  }
  
  @media screen and (max-width: 576px){
    padding: 20px;
  }
`
const CalcNums = styled.div`
  .short-btns{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    letter-spacing: 0.1em;
  }

  .theme1 .btn{
    background-color: var(--theme1-main-key-bg);
    box-shadow: 0 5px 0 var(--theme1-main-key-shadow);
    color: var(--theme1-btn-text);
  }

  .theme2 .btn{
    background-color: var(--theme2-main-key-bg);
    box-shadow: 0 5px 0 var(--theme2-main-key-shadow); 
    color: var(--theme2-btn-text);
  }
 
  .btn{
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Spartan Bold', Arial, Helvetica, sans-serif;
    font-size: 2em;
    padding: 8px 0;

    :hover{
      cursor: pointer;
    }
  }

    .theme1 .del-btn,
    .theme1 .reset-btn{
      background-color: var(--theme1-gray-blue-bg);
      box-shadow: 0 5px 0 var(--theme1-gray-blue-shadow);
      color: var(--theme1-main-key-bg);
    }

    .theme2 .del-btn,
    .theme2 .reset-btn{
      background-color: var(--theme2-teal-bg);
      box-shadow: 0 5px 0 var(--theme2-teal-shadow);
      color: var(--theme2-main-key-bg);
    }

    .del-btn,
    .reset-btn{
      font-size: 1.25em;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .long-btns{
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;

      > :hover{
        cursor: pointer;
      }
    }
      .equal-btn,
      .reset-btn{
        border: none;
        border-radius: 10px;
        color: var(--theme1-main-key-bg);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Spartan Bold', Arial, Helvetica, sans-serif;
        margin-top: 30px;
        padding: 15px;
        width: 50%;
      }

      .theme1 .equal-btn{
        background-color: var(--theme1-red-bg);
        box-shadow: 0 5px 0 var(--theme1-red-shadow);
      }

      .theme2 .equal-btn{
        background-color: var(--theme2-orange-bg);
        box-shadow: 0 5px 0 var(--theme2-orange-shadow);
      }
      
      .equal-btn{
        font-size: 2em;
        line-height: 1em;
      }
    }
  }
`

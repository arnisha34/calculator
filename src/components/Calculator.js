import React from 'react'
import styled from 'styled-components'

export default function Calculator({theme}) {


  return (
    <Calc>
      <CalcDisplay className={`display ${theme}`}>
        <span>34</span>
      </CalcDisplay>
      <CalcNumContainer>
        <CalcNums>
          <div className={`short-btns ${theme}`}>
            <div className="btn">
              <div className="seven" data-num="7">7</div>
            </div>
            <div className="btn">
              <div className="eight" data-num="8">8</div>
            </div>
            <div className="btn">
              <div className="nine" data-num="9">9</div>
            </div>
            <div className="btn del-btn">
              <div className="del">del</div>
            </div>
            <div className="btn">
              <div className="four" data-num="4">4</div>
            </div> 
            <div className="btn">
              <div className="five" data-num="5">5</div>
            </div>
            <div className="btn">
              <div className="six" data-num="6">6</div>
            </div>
            <div className="btn">
              <div className="addition">+</div>
            </div>
            <div className="btn">
              <div className="one" data-num="1">1</div>
            </div>
            <div className="btn">
              <div className="two" data-num="2">2</div>
            </div>
            <div className="btn">
              <div className="three" data-num="3">3</div>
            </div>
            <div className="btn">
              <div className="subtract">-</div>
            </div>
            <div className="btn">
              <div className="period">.</div>
            </div>
            <div className="btn">
              <div className="zero" data-num="0">0</div>
            </div>
            <div className="btn">
              <div className="divide">/</div>
            </div>
            <div className="btn">
              <div className="multiply">x</div>
            </div>
          </div>
          <div className={`long-btns ${theme}`}>
            <div className="reset-btn">
              <div className="reset">reset</div>
            </div>
            <div className="equal-btn">
              <div className="equal">=</div>
            </div>
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
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 2.5em;
  letter-spacing: 0.1em;
  padding: 30px;
  height: 125px;
`
const CalcNumContainer = styled.div`
  background-color: var(--theme1-num-cont);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 30px;
  margin-top: 20px;
`
const CalcNums = styled.div`
  .short-btns{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    letter-spacing: 0.1em;
  }
 
  .btn{
    background-color: var(--theme1-main-key-bg);
    border-radius: 10px;
    box-shadow: 0 5px 0 var(--theme1-main-key-shadow);
    box-sizing: border-box;
    color: var(--theme1-btn-text);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 0;
    font-size: 2em;
  }

    .theme1 .del-btn,
    .theme1 .reset-btn{
      background-color: var(--theme1-gray-blue-bg);
      box-shadow: 0 5px 0 var(--theme1-gray-blue-shadow);
      color: var(--theme1-main-key-bg);
      text-transform: uppercase;
      font-size: 1.25em;
    }

    .long-btns{
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: space-between;
      letter-spacing: 0.1em;
    }
      .equal-btn,
      .reset-btn{
        border-radius: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        padding: 15px;
        width: 50%;
      }

      .theme1 .equal-btn{
        background-color: var(--theme1-red-bg);
        box-shadow: 0 5px 0 var(--theme1-red-shadow);
        font-size: 1.25em;
      }
    }
  }
`

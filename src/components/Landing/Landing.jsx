import React, { useState } from "react";
import {
  CharacterLengthContainer,
  GenerateButtonContainer,
  GeneratedPasswordContainer,
  GeneratorContainer,
  GeneratorSettingsContainer,
  InputContainer,
  LandingContainer,
  LandingSection,
  PasswordSettingsContainer,
  PasswordStrengthContainer,
  RangeInput,
} from "./components";

import { AiOutlineCopy } from "react-icons/ai";

export const Landing = () => {
  const [slide, setSlide] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [generatedPass, setGeneratedPass] = useState();

  function sliderOnChange(e) {
    console.log(e.target.value);
    setSlide(e.target.value);
  }

  function uppercaseOnChange(e) {
    if (uppercase == true) {
      setUppercase(false);
      console.log(false);
    } else {
      setUppercase(true);
      console.log(true);
    }
    // console.log(e.target.value);
    // setUppercase(e.target.value);
  }

  function lowercaseOnChange() {
    if (lowercase == true) {
      setLowercase(false);
    } else {
      setLowercase(true);
    }
  }

  function numberOnChange() {
    if (number == true) {
      setNumber(false);
    } else {
      setNumber(true);
    }
  }

  function symbolsOnChange() {
    if (symbol == true) {
      setSymbol(false);
    } else {
      setSymbol(true);
    }
  }

  const uppercaseValues = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const lowercaseValues = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const symbols = ["!", "?", "-", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "[", "]"];

  function generatePassword() {
    let passLength = slide;
    // console.log(passLength);

    if (passLength == 8 && uppercase == true) {
      upperLetters();
    } else if (passLength == 8 && lowercase == true) {
      lowerLetters();
    } else if (passLength == 8 && number == true) {
      includeNumbers();
    } else if (passLength == 8 && symbol == true) {
      includeSymbols();
    } else if (passLength == 8 && uppercase == true && lowercase == true && number == true && symbol == true) {
    }
  }

  function upperLetters() {
    let retVal = [];
    for (let i = 0; i < uppercaseValues.length; i++) {
      retVal.push(uppercaseValues[Math.floor(Math.random() * uppercaseValues.length)]);
      let chars = retVal.slice(0, slide);
      setGeneratedPass(chars.join(""));
      // console.log(chars);
    }
    return retVal;
  }

  function lowerLetters() {
    let retVal = [];
    for (let i = 0; i <= 8; i++) {
      retVal.push(lowercaseValues[Math.floor(Math.random() * lowercaseValues.length)]);
      let chars = retVal.slice(0, slide);
      setGeneratedPass(chars.join(""));
    }
  }

  function includeNumbers() {
    let retVal = [];
    for (let i = 0; i <= 8; i++) {
      retVal.push(numbers[Math.floor(Math.random() * numbers.length)]);
      let nums = retVal.slice(0, slide);
      setGeneratedPass(nums.join(""));
    }
  }

  function includeSymbols() {
    let retVal = [];
    for (let i = 0; i <= 8; i++) {
      retVal.push(symbols[Math.floor(Math.random() * symbols.length)]);
      let symb = retVal.slice(0, slide);
      setGeneratedPass(symb.join(""));
    }
  }

  return (
    <LandingSection>
      <LandingContainer>
        <GeneratorContainer>
          <h2>Password Generator</h2>
          <GeneratedPasswordContainer>
            <span>{generatedPass}</span>
            <AiOutlineCopy />
          </GeneratedPasswordContainer>
          <GeneratorSettingsContainer>
            <CharacterLengthContainer>
              <span>Character Length</span>
              <span>{slide}</span>
            </CharacterLengthContainer>
            <RangeInput onChange={sliderOnChange} type="range" max="16" min="8" />
            <PasswordSettingsContainer>
              <InputContainer>
                <input onChange={uppercaseOnChange} type="checkbox" />
                <span>Uppercase letters</span>
              </InputContainer>
              <InputContainer>
                <input onChange={lowercaseOnChange} type="checkbox" />
                <span>Lowercase letters</span>
              </InputContainer>
              <InputContainer>
                <input onChange={numberOnChange} type="checkbox" />
                <span>Numbers</span>
              </InputContainer>
              <InputContainer>
                <input onChange={symbolsOnChange} type="checkbox" />
                <span>Symbols</span>
              </InputContainer>
            </PasswordSettingsContainer>
          </GeneratorSettingsContainer>
          <PasswordStrengthContainer>
            <span>STRENGTH</span>
            <span>MEDIUM</span>
          </PasswordStrengthContainer>
          <GenerateButtonContainer>
            <button onClick={generatePassword}>GENERATE</button>
          </GenerateButtonContainer>
        </GeneratorContainer>
      </LandingContainer>
    </LandingSection>
  );
};

// let arr = [];
// let arr2 = [];
// let arr3 = [];
// arr.push(uppercaseValues[Math.floor(Math.random() * uppercaseValues.length)]);
// console.log(arr);
// arr2.push(uppercaseValues[Math.floor(Math.random() * uppercaseValues.length)]);
// console.log(arr2);
// arr3.push(uppercaseValues[Math.floor(Math.random() * uppercaseValues.length)]);
// console.log(arr3);
// let arr4 = arr.concat(arr2, arr3);
// setGeneratedPass(arr4.join(""));

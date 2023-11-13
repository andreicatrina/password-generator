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
  SuccessContainer,
} from "./components";

import { AiOutlineCopy } from "react-icons/ai";

export const Landing = () => {
  const [passwordLength, setPasswordLength] = useState(9);
  const [password, setPassword] = useState("");
  const [useUpperCase, setUseUppercase] = useState(false);
  const [useLowerCase, setUseLowercase] = useState(false);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useSymbols, setUseSymbols] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  function sliderOnChange(e) {
    console.log(e.target.value);
    setPasswordLength(e.target.value);
  }

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    setError("");
    if (!useSymbols && !useNumbers && !useLowerCase && !useUpperCase) {
      setError("Please select at least one option!");
    }

    if (useSymbols) charset += "!@#$%^&*()";
    if (useNumbers) charset += "0123456789";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
    setSuccessMessage("");
  };

  function uppercaseOnChange(e) {
    if (useUpperCase == true) {
      setUseUppercase(false);
      console.log(false);
    } else {
      setUseUppercase(true);
      console.log(true);
    }
    // console.log(e.target.value);
    // setUppercase(e.target.value);
  }

  function lowercaseOnChange() {
    if (useLowerCase == true) {
      setUseLowercase(false);
    } else {
      setUseLowercase(true);
    }
  }

  function numberOnChange() {
    if (useNumbers == true) {
      setUseNumbers(false);
    } else {
      setUseNumbers(true);
    }
  }
  function symbolsOnChange() {
    if (useSymbols == true) {
      setUseSymbols(false);
    } else {
      setUseSymbols(true);
    }
  }

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setSuccessMessage("Password copied to clipboard!");
    // setTimeout(() => setSuccessMessage(""), 2000);
  };

  const uppercaseValues = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lowercaseValues = ["abcdefghijklmnopqrstuvwxyz"];
  const numbers = ["0123456789"];
  const symbols = ["!@#$%^&*()"];

  return (
    <LandingSection>
      <LandingContainer>
        <GeneratorContainer>
          <h2>Password Generator</h2>
          <GeneratedPasswordContainer>
            <span>{password}</span>
            <AiOutlineCopy onClick={copyToClipboard} />
          </GeneratedPasswordContainer>
          <SuccessContainer>
            <p>{successMessage ? "Password copied to clipboard" : null}</p>
          </SuccessContainer>
          <GeneratorSettingsContainer>
            <CharacterLengthContainer>
              <span>Character Length</span>
              <span>{passwordLength}</span>
            </CharacterLengthContainer>
            <RangeInput onChange={sliderOnChange} type="range" min="9" max="16" defaultValue={0} />
            <PasswordSettingsContainer>
              <div style={{ color: "red" }}>{error}</div>
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
            <span>{useSymbols && useNumbers && useLowerCase && useUpperCase ? "Strong" : "Weak"}</span>
          </PasswordStrengthContainer>
          <GenerateButtonContainer>
            <button onClick={generatePassword}>{password ? "GENERATE NEW PASS" : "GENERATE"}</button>
          </GenerateButtonContainer>
        </GeneratorContainer>
      </LandingContainer>
    </LandingSection>
  );
};

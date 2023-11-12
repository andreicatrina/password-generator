import styled from "styled-components";

export const LandingSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
`;

export const LandingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  height: 100%;
`;

export const GeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  gap: 10px;
  padding: 48px 12px;
  background-color: var(--color-app);
  border-radius: 10px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    padding: 12px;
  }
`;

export const GeneratedPasswordContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 360px;
  background-color: var(--color-background);
  padding: 8px;
  border-radius: 8px;

  span {
    padding: 0 12px;
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    padding: 0 12px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const GeneratorSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  background-color: var(--color-background);
  padding: 12px 8px;
  border-radius: 8px;
`;

export const CharacterLengthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 8px;
`;

export const RangeInput = styled.input`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  cursor: pointer;
`;

export const PasswordSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;
  max-width: 300px;
  padding: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  padding: 6px 0;
  gap: 8px;
  input {
    cursor: pointer;
  }
`;

export const PasswordStrengthContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 360px;
  padding: 8px;
  background-color: var(--color-background);
  border-radius: 8px;

  span {
    padding: 0 12px;
    font-weight: 600;
    font-size: 16px;
  }
`;

export const GenerateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 12px;

  button {
    border: none;
    background-color: var(--color-buttons);
    width: 100%;
    max-width: 376px;
    height: 48px;
    font-weight: 800;
    font-size: 18px;
    color: var(--color-background);
    border-radius: 8px;
    cursor: pointer;
  }
`;

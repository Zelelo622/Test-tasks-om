import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 800px;
`;

export const FormWrapper = styled.div`
  background: #fff;
  padding: 20px 0;
  width: 100%;
  border: 1px solid #ccc;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
`;

export const TitleLeft = styled.h2`
  font-weight: 700;
  font-size: 32px;
`;

export const TitleRight = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const TitleForm = styled.p`
  font-size: 22px;
  margin-bottom: 14px;
  text-align: center;
`;

export const Section = styled.div`
  padding-bottom: 20px;
  background: #fff;
`;

export const SectionAdditional = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  background: #fff8d5;
  box-shadow: 0px 10px 8px 0px rgba(34, 60, 80, 0.2);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  text-align: right;
  padding-right: 8px;
  width: 40%;
`;

export const FieldWrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 40%;
`;

export const ColorInput = styled.input`
  width: 60px;
  height: 30px;
  padding: 1px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 40%;
  padding: 6px;
  border: 1px solid #ccc;
  background: #fff;
`;

export const RadioWrapper = styled.div`
  margin: 10px 0;
`;

export const CheckboxWrapper = styled.div`
  margin: 10px 0;
  font-size: 14px;

  a {
    text-decoration: underline !important;
  }
`;

export const Link = styled.a`
  color: #0056d6;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background: linear-gradient(180deg, #9a71f2, #5d2fe3);
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

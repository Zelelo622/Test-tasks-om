import React, { useState } from "react";
import {
  Button,
  ColorInput,
  FormContainer,
  FormWrapper,
  Section,
  TextArea,
  TitleLeft,
  TitleContainer,
  TitleRight,
  TitleForm,
  ButtonWrapper,
  Row,
  Input,
  Label,
  SectionAdditional,
  FieldWrapper,
} from "./styles";

const Form = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#0000ff");
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(false);
  const [radio, setRadio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify({ name, color, comment, agree, radio }, null, 2));
  };

  return (
    <FormContainer>
      <TitleContainer>
        <TitleLeft>Заполните поля</TitleLeft>
        <TitleRight>Ну пожалуйста</TitleRight>
      </TitleContainer>
      <FormWrapper>
        <TitleForm>Основное</TitleForm>
        <form onSubmit={handleSubmit}>
          <Section>
            <Row>
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                type="text"
                placeholder="по паспорту"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Row>

            <Row>
              <Label htmlFor="color">Цвет вашего настроения</Label>
              <ColorInput
                id="color"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Row>
          </Section>

          <SectionAdditional>
            <Row>
              <Label htmlFor="comment">Комментарий</Label>
              <TextArea
                id="comment"
                rows={3}
                placeholder="Напишите хоть что-нибудь. Если хотите, конечно."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Row>
          </SectionAdditional>

          <Row>
            <Label />
            <FieldWrapper>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="radio1"
                  checked={radio === "radio1"}
                  onChange={(e) => setRadio(e.target.value)}
                />{" "}
                Ну а тут просто полежит радиобатон
              </label>
            </FieldWrapper>
          </Row>

          <Row>
            <Label />
            <FieldWrapper>
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  style={{ marginRight: "4px", marginTop: "2px" }}
                />
                <div>
                  Соглашаюсь на всё, что бы вы не придумали и осознаю, что это
                  может означать{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    что угодно
                  </a>
                </div>
              </div>
            </FieldWrapper>
          </Row>

          <ButtonWrapper>
            <Button type="submit">Отправить все мои данные</Button>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </FormContainer>
  );
};

export default Form;

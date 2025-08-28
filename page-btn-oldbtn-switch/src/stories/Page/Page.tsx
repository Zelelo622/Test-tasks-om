import React from "react";
import { PageSection, TipWrapper } from "./styles";

export const Page = (): React.ReactElement => {
  return (
    <article>
      <PageSection>
        <h2>Пример страницы</h2>
        <p>
          Это демонстрационный компонент с текстом и элементами интерфейса.
          Здесь можно показывать разные состояния без логики и данных.
        </p>
        <p>
          Ниже приведён список задач. Его можно использовать как заглушку для
          макета:
        </p>
        <ul>
          <li>
            <label>
              <input type="checkbox" /> Сделать верстку страницы
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Добавить базовые стили
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" /> Проверить отображение текста
            </label>
          </li>
        </ul>
        <p>
          Подробнее см.{" "}
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            документацию по проекту
          </a>
          .
        </p>
        <TipWrapper>
          <span className="tip">Совет</span> Используйте чекбоксы ✅ для
          наглядного списка дел
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
        </TipWrapper>
      </PageSection>
    </article>
  );
};

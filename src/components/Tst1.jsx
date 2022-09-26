import React, { useState } from "react";
import "../styles/Test.css";
import img1 from "../img/block2/termos.jpg";
import img2 from "../img/block2/eco.jpg";
import img3 from "../img/block2/Trash.jpeg";

const Tst1 = () => {
  const [state, setState] = useState(false);
  const [stateTwo, setStateTwo] = useState(false);
  const [stateThree, setStateThree] = useState(false);
  return (
    <div className="Test">
      <div className="test-first">
        <img src={img1} alt="" className="test-first-img" />
        <div className="test-h3">ЭКОПРОДУКЦИЯ</div>
        <button className="test-first-btn" onClick={() => setState(!state)}>
          Learn More
        </button>
      </div>
      {state && (
        <div className="test-first-info">
          <p>
            Фирменные термосы Michelle Один из принципов зелёной кофейни
            Michelle — не использовать вещи только один раз. Michelle предлагает
            своим гостям заменить самые простые одноразовые предметы. К примеру,
            вместо бумажных стаканчиков — термосы, которые прослужат долго и
            будут без проблем утилизированы. Кстати, если забираешь напиток в
            фирменном термосе Michelle —
            <span style={{ color: "gold" }}>получаешь скидку -25%</span>.
            Посудомоечная машина Michelle бережливо тратит воду, используя
            посудомоечную машину, вместо традиционного мытья посуды руками.
            Посудомоечная машина, как правило, расходует меньше воды и
            электроэнергии. Безусловно, это самый экологически безопасный способ
            мыть посуду.
          </p>
        </div>
      )}

      <div className="test-first">
        <img src={img3} alt="" className="test-first-img" />
        <div className="test-h3">МУСОР</div>
        <button
          className="test-first-btn"
          onClick={() => setStateTwo(!stateTwo)}
        >
          Learn More
        </button>
      </div>
      {stateTwo && (
        <div className="test-first-info">
          <p>
            Зелёная кофейня <span style={{ color: "gold" }}> Michelle </span>
            сортирует мусор и предлагает гостям сдавать его для дальнейшей
            переработки во имя изменения мира к лучшему и сохранения нашей
            планеты чистой и удобной для жизни. Что можно сдать в Michelle? -
            Пластиковые бутылки - Емкости из под мыломойки - Стеклянные бутылки
            Отказ от одноразовых пластиковых бутылок Философия кофейни Michelle
            основана на осознанном потреблении. Следуя своим принципам «Zero
            waste» (или «Ноль отходов»), зелёная кофейня Michelle отказалась от
            одноразового пластика и пластиковых бутылок. Мы используем 19
            литровые бутыли для воды на розлив, сокращая использование пластика.
          </p>
        </div>
      )}
      <div className="test-first">
        <img src={img2} alt="" className="test-first-img" />
        <div className="test-h3">РАСТЕНИЯ</div>
        <button
          className="test-first-btn"
          onClick={() => setStateThree(!stateThree)}
        >
          Learn More
        </button>
      </div>
      {stateThree && (
        <div className="test-first-info">
          <p>
            Растения — залог здоровья человека. В нашей кофейне растения не
            только украшают, но и очищают воздух. Мы с трепетом относимся к
            здоровью наших гостей и ждём вас в нашей зелёной кофейне. Посадка
            деревьев Дерево — это чистый воздух, жизнь, здоровье, память. Для
            нас очень важно восполнить баланс природы и видеть наш город зелёным
            и здоровым, именно поэтому кофейня Michelle ежегодно высаживает
            деревья эквивалентно затраченной бумаге.
          </p>
        </div>
      )}
    </div>
  );
};

export default Tst1;

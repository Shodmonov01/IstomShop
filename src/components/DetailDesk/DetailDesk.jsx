import './DetailDesk.scss'


function DetailDesk({ details }) {
  const { description, characteristics } = details;

  return (
    <div className="container">
      <div className="detaildesk">
        <div className="detaildesk-specification">
          <p className="detaildesk-specification__title">Описание</p>
          <p className="detaildesk-specification__subtitle">{description}</p>
        </div>
        <div className="detaildesk-params">
          <p className="detaildesk-params__title">Характеристики</p>
          <ul className="detaildesk-params__list">
            {characteristics.map((char, index) => (
              <li key={index} className="detaildesk-params__item">
                {char.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="detaildesk-advan">
          <p className="detaildesk-advan__title">Преимущества</p>
          {/* Assuming you want to display advantages here */}
          <ul className="detaildesk-advan__list">
            {details.advantages.map((advantage, index) => (
              <li key={index} className="detaildesk-advan__item">
                {advantage.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DetailDesk;

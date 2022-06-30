import "./styles.scss";

export const MainContent = () => {
  return (
    <div className="main-content">
      <section className="main-content__header header">
        <h1 className="header__name">PUT YOUR NAME HERE</h1>
        <h2 className="header__position">JOB POSITION</h2>
      </section>

      <section className="main-content__section">
        <h3 className="section__title title">
          <span className="title__first">PROFESSIONAL</span>
          <span className="title__second"> EXPERIENCE</span>
        </h3>
        <ul className="experience__list list">
          <li className="list__item">
            <div className="item__dates dates">
              <span className="dates__date">MONTH/ YEAR</span>
              <span className="dates__date">MONTH/ YEAR</span>
            </div>

            <div className="item__company company">
              <span className="company__name">Company Name</span>
              <span className="company__location">Location</span>
            </div>

            <ul className="item__experiences-list">
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
            </ul>
          </li>

          <li className="list__item">
            <div className="item__dates dates">
              <span className="dates__date">MONTH/ YEAR</span>
              <span className="dates__date">MONTH/ YEAR</span>
            </div>

            <div className="item__company company">
              <span className="company__name">Company Name</span>
              <span className="company__location">Location</span>
            </div>

            <ul className="item__experiences-list">
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
            </ul>
          </li>

          <li className="list__item">
            <div className="item__dates dates">
              <span className="dates__date">MONTH/ YEAR</span>
              <span className="dates__date">MONTH/ YEAR</span>
            </div>

            <div className="item__company company">
              <span className="company__name">Company Name</span>
              <span className="company__location">Location</span>
            </div>

            <ul className="item__experiences-list">
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
              <li className="experiences-list__item">
                <span className="list__icon"></span>
                <p className="list__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="main-content__section">
        <h3 className="section__title title">
          <span className="title__first">OTHER</span>
          <span className="title__second"> INFORMATIONS</span>
        </h3>
        <ul className="experience__list list">
          <li className="list__item">
            <div className="item__dates dates">
              <span className="dates__date">MONTH/ YEAR</span>
            </div>

            <p className="list__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              deleniti quae consequatur eum veritatis illo? Magnam laborum
              dolor, laboriosam iste, quibusdam quasi qui, officia numquam
              incidunt saepe tempore sapiente aut.
            </p>
          </li>

          <li className="list__item">
            <div className="item__dates dates">
              <span className="dates__date">MONTH/ YEAR</span>
            </div>

            <p className="list__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              deleniti quae consequatur eum veritatis illo? Magnam laborum
              dolor, laboriosam iste, quibusdam quasi qui, officia numquam
              incidunt saepe tempore sapiente aut.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

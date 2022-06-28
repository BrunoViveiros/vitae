import "./styles.scss";

export const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar__photo">
        <img src="https://i.pravatar.cc/300" alt="user" />
      </div>
      <div className="side-bar__info">
        <div className="side-section">
          <h3 className="side-section__title">PROFILE</h3>
          <div className="side-section__info">
            <p>STREET NAME</p>
            <p>POSTAL CODE/ CITY NAME</p>
          </div>
          <div className="side-section__info">
            <p>DATE BIRTH</p>
          </div>
          <div className="side-section__info">
            <p>NATIONALITY</p>
            <p>NATURALITY</p>
          </div>
          <div className="side-section__info">
            <p>PHONE NUMBER</p>
          </div>
          <div className="side-section__info">
            <p>E-MAIL ADDRESS</p>
          </div>
          <div className="side-section__info">
            <p>WEBSITE</p>
          </div>
        </div>
        <div className="side-section">
          <p className="side-section__text-header">
            Hi! My Name is (your name here),
          </p>
          <p className="side-section__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            autem qui odit modi neque tempora deserunt vitae! Animi aliquam
            atque maxime maiores suscipit rem quaerat obcaecati, omnis minus
            sequi veritatis! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Officiis inventore nobis molestiae dolorum omnis fuga odio. Id
            mollitia, cumque doloribus sequi quod corrupti. Ad deleniti culpa
            earum mollitia odio corrupti.
          </p>
        </div>
        <div className="side-section">
          <h3 className="side-section__title">SKILLS:</h3>
          <ul className="side-section__skills">
            <li className="side-section__skills-item">
              <p>LANGUAGE1</p>
              <div></div>
            </li>
            <li className="side-section__skills-item">
              <p>LANGUAGE2</p>
              <div></div>
            </li>
            <li className="side-section__skills-item">
              <p>LANGUAGE3</p>
              <div></div>
            </li>
            <li className="side-section__skills-item">
              <p>LANGUAGE4</p>
              <div></div>
            </li>
          </ul>
          <ul className="side-section__skills">
            <li className="side-section__skills-item">
              <p>LANGUAGE1</p>
              <div></div>
            </li>
            <li className="side-section__skills-item">
              <p>LANGUAGE2</p>
              <div></div>
            </li>
            <li className="side-section__skills-item">
              <p>LANGUAGE3</p>
              <div></div>
            </li>
            <li className="side-section__skills-item">
              <p>LANGUAGE4</p>
              <div></div>
            </li>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
};

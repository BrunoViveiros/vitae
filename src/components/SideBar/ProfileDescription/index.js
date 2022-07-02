import "./styles.scss";

export const ProfileDescription = ({ className }) => {
  return (
    <section className={`${className} profile-description`}>
      <p className="profile-description__header">
        Hi! My Name is (your name here),
      </p>
      <p className="profile-description__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat autem
        qui odit modi neque tempora deserunt vitae! Animi aliquam atque maxime
        maiores suscipit rem quaerat obcaecati, omnis minus sequi veritatis!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        inventore nobis molestiae dolorum omnis fuga odio. Id mollitia, cumque
        doloribus sequi quod corrupti. Ad deleniti culpa earum mollitia odio
        corrupti.
      </p>
    </section>
  );
};

import { useState } from 'react';

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  const [liked, setLiked] = useState(isLiked);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <li className="element">
      <img src={link} alt={`Fotografía de ${name}`} className="element__image" />
      <img src="./images/Trash.svg" alt="Icono para eliminar post" className="element__trash" />
      <div className="element__info">
        <p className="element__name">{name}</p>
        <button type="button" className={!liked ? "element__like" : "element__like element__like_active"} onClick={() => handleLike()}></button>
      </div>
    </li>
  );
}
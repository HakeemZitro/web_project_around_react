import ImagePopup from '../ImagePopup/ImagePopup';
import RemoveCard from '../RemoveCard/RemoveCard';
import { useState } from 'react';

export default function Card(props) {
  const { onClose, openFull, card } = props;
  const { name, link, isLiked } = props.card;

  const [liked, setLiked] = useState(isLiked);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <li className="element">
      <img src={link} alt={`Fotografía de ${name}`} className="element__image" onClick={() => openFull({ children: <ImagePopup onClose={onClose} card={card} /> })} />
      <img src="./images/Trash.svg" alt="Icono para eliminar post" className="element__trash" onClick={() => openFull({ children: <RemoveCard title="¿Estás seguro?" onClose={onClose} /> })} />
      <div className="element__info">
        <p className="element__name">{name}</p>
        <button type="button" className={!liked ? "element__like" : "element__like element__like_active"} onClick={() => handleLike()}></button>
      </div>
    </li>
  );
}
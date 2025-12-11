import trash from '../../../assets/Trash.svg';
import ImagePopup from '../ImagePopup/ImagePopup';
import RemoveCard from '../RemoveCard/RemoveCard';
import { useState } from 'react';

export default function Card(props) {
  const { onClose, openFull, card } = props;

  const [liked, setLiked] = useState(card.isLiked);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <li className="element">
      <img src={card.link} alt={`Fotografía de ${card.name}`} className="element__image" onClick={() => openFull({ children: <ImagePopup onClose={onClose} card={card} /> })} />
      <img src={trash} alt="Icono para eliminar post" className="element__trash" onClick={() => openFull({ children: <RemoveCard title="¿Estás seguro?" onClose={onClose} /> })} />
      <div className="element__info">
        <p className="element__name">{card.name}</p>
        <button type="button" className={!liked ? "element__like" : "element__like element__like_active"} onClick={() => handleLike()}></button>
      </div>
    </li>
  );
}
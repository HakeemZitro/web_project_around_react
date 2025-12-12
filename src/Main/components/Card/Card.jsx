import trash from '../../../assets/Trash.svg';
import ImagePopup from '../ImagePopup/ImagePopup';
import RemoveCard from '../RemoveCard/RemoveCard';

export default function Card(props) {
  const { onClose, openFull, card, onCardLike, onCardDelete } = props;

  return (
    <li className="element">
      <img src={card.link} alt={`Fotografía de ${card.name}`} className="element__image" onClick={() => openFull({ children: <ImagePopup onClose={onClose} card={card} /> })} />
      <img src={trash} alt="Icono para eliminar post" className="element__trash" onClick={() => openFull({ children: <RemoveCard title="¿Estás seguro?" onClose={onClose} onCardDelete={onCardDelete} /> })} />
      <div className="element__info">
        <p className="element__name">{card.name}</p>
        <button type="button" className={!card.isLiked ? "element__like" : "element__like element__like_active"} onClick={() => onCardLike(card)}></button>
      </div>
    </li>
  );
}
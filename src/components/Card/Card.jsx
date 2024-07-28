
import './Card.css'
const Card = ({card,handleClick}) =>
   
    {
    return (
      <div className="big">
          <div className="box mt-4">
            <div className="card">
      <img src={card.image} />
      <h2>{card.title.substring(0,10)}</h2>
      <p>{card.description.substring(0,60)}</p>
      <div className="card-footer">
        <div className="btn">
          <button onClick={()=>handleClick(card)}>Add to card</button>
        </div>
        <div className="price">
          <h2>{card.price} $ </h2>
        </div>
      </div>

    </div>
        </div>
      </div>
    );
};

export default Card;
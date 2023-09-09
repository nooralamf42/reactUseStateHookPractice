import "./card.css"


export default function Card({cardImage, cardH1, itemDetails, removeProduct}) {

  return (
    <div className='card'>
        <img className='card-image' src={cardImage} alt="" srcset="" />
        <div className="card-body">
            <h1 className='card-h1'>
                {cardH1}
            </h1>
            <p className="card-p">
                {itemDetails}
            </p>
            <button className='card-b' onClick={(e)=>removeProduct(e.currentTarget.parentElement.firstChild.innerText)}>Add to cart</button>
        </div>
    </div>
  )
}

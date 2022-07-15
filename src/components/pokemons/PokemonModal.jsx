
import { RiCloseLine } from 'react-icons/ri'

function PokemonModal({ isOpen, onClose, image , name,type,id}) {
    if(!isOpen) return null 
    return (
        <div onClick={onClose} className='overlay'>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className='modalContainer'
          >
            <img src={image} alt='/' />
            <div className='modalRight'>
              <p className='closeBtn' onClick={onClose}>
                X
              </p>
              <div className='content'>
                <p>{id}</p>
                <h1>{name}</h1>
                <p>{type}</p>
              </div>
              <div className='btnContainer'>
                <button className='btnPrimary'>
                  <span className='bold'>YES</span>, I love NFT's
                </button>
                <button className='btnOutline'>
                  <span className='bold'>NO</span>, thanks
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default PokemonModal
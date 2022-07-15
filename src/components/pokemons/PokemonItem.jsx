
import { Link } from "react-router-dom"
import PokemonModal from "./PokemonModal"
import {useState} from 'react'

function PokemonItem({ id, name, image, type,login }) {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className='card shadow-md compact side bg-base-100'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div>
                    <div className='avatar'>
                        <div className='rounded-full shadow w-14 h-14'>
                            <img src={image} alt={name} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='card-title'>{id}</h2>
                    <h3 className='text-base-content text-xl text-opacity-40'>{name}</h3>
                    <h3 className='text-base-content text-opacity-40'>{type}</h3>
                    <button onClick={() => setOpenModal(true)} className='text-base-content text-opacity-40'>View Profile</button>
                    <div>
                        <h2 className='card-title'>{login}</h2>
                         
                        <PokemonModal
                        className='text-base-content text-opacity-40' 
                        isOpen={openModal} 
                        onClose={() => setOpenModal(false)} 
                        image={image}
                        id={id}
                        name={name}
                        type={type}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem
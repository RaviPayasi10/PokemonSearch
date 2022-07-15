import {useState} from 'react'

function PokemonSearch() {

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            alert('Please enter something', 'error')
        } else {
            // searchUsers(text)
            setText('')
        }

        return (
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2
    md:grid-cols-2 mb-8 gap-8" >
                <div>
                    <form onSubmit={handleSubmit} >
                        <div className="form-control">
                            <div className="relative">
                                <input
                                    type='text'
                                    className="w-full pr-80 bg-gray-200 input
                        input-lg text-black"
                                    placeholder="Search"
                                    value={text}
                                    onChange={handleChange}>
                                </input>
                                <button type="submit" className="absolute top-0 right-0 
                            rounded-l-none w-36 btn btn-lg">
                                    SEARCH
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* {users.length > 0 && (<div>
            <button onClick={clearList} className="btn btn-ghost btn-lg">Clear</button>
        </div>)} */}

            </div>
        )
    }
}

export default PokemonSearch
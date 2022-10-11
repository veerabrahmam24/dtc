import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>jdshbj sdjfjsdfv</h2>
                    <p>jsnfv[jfvfjvnoxbvhdfjvndfouhvbdfiovbdfojkvhdfuvhdfv d9u[fovjbsidfvhusv 9duvjbhfu9v 9u[vhsbvudfyvhdfjvhdfhvdfv </p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>sjdjkfnjifjovdfo v</h3>
                                <p>ksdjfnsdjvsfvnhdfvjf</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>jsdjnsvdfv dipfjvdfvbdfvnduipdofbgldfib </h3>
                                <p>knsdjfnjofnopd[gndfh jdfvdfvndkf idfhfbfhk,dfjhkdsf</p>
                                <button>knsdjfnjofnopd</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">jhknsdjfnjofnopd[gndfh jdfvdfvndkf idfhfbfhk,dfjhkdsf</h4>
                        <p className="timer">knsdjfnjofnopd[gndfh jdfvdfvndkf idfhfbfhk,dfjhkdsf</p>
                        <p className="offers">knsdjfnjofnopd[gndfh jdfvdfvndkf idfhfbfhk,dfjhkdsf</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>hdbd</label>
                            <select>
                                <option value="1">Grande Antigua</option>
                                <option value="1">Grenda</option>
                                <option value="1">Emerald Bay</option>
                                <option value="1">Bora Bora</option>
                                <option value="1">Key West</option>
                                <option value="1">Maldives</option>
                                <option value="1">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rknsdjfnjofnopd[gndfh jdfvdfvndkf idfhfbfhk,dfjhkdsf </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search

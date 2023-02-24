import React, {useState} from "react";

const Search = () => {
    

    return (
        <form >
            <div className="mb-3">
                <label htmlFor="Telefono" className="form-label">Busqueda (Por numero de Telefono)</label>
                <input  name="Telefono"  type="number" id="Telefono" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
    );
}

export default Search;
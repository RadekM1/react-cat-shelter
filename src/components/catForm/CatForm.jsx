import "./CatForm.css"

const CatForm = ({data, onChange, onClick}) => {

const disabled = false

    return (
        <div className="text-center row formular justify-content-center mt-4">
            <h3>Přidat kočku</h3>
            <input type="text" className="form-control m-1" onChange={onChange} placeholder="Jméno" value={data.name} name="name" />
            <input type="text" className="form-control m-1" onChange={onChange} placeholder="Rasa" value={data.breed} name="breed" />
            <input type="number" min="0" max="25" className="form-control m-1" onChange={onChange} value={data.age} placeholder="Věk (0-25)" name="age"/>
            <button disabled={disabled} onClick={onClick} className="btn btn-success col-5 m-2">Přidat</button>
        </div>
    )
}

export default CatForm
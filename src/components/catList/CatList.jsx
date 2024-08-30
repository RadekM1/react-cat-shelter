import "./CatList.css"


const CatList = ({dataIn, handleClick}) => {

    const handleButtonClick = (e) =>{
        const catToDel = parseInt(e.target.value) 
        handleClick(catToDel)
    }



    return (
        <div className="cat-list-style">
            {dataIn.map((item)=>{
                return (
                    <div key={item.id} className="row  m-2 cat-row">
                        <div className="col-3 align-content-center">
                            Jméno: <b>{item.name}</b>
                        </div>
                        <div className="col-3 p-1 align-content-center">
                            Rasa: <b>{item.breed}</b> 
                        </div>
                        <div className="col-3 p-1 align-content-center">
                          Věk: <b>{item.age}</b>
                        </div>
                        <div className="col-3 p-1 justify-content-end">
                            <button onClick={handleButtonClick} value={item.id} className="btn btn-danger">Odebrat</button>
                        </div>
                    </div>
                )
            })    
        }
        </div>
    )
}

export default CatList
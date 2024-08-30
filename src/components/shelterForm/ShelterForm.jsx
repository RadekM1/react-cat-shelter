import { useEffect, useState } from "react"
import "./ShelterForm.css"

const ShelterForm = ({capacity}) => {

    const [tempStorage, setTempStorage] = useState({
        food: "",
        vaccine: "",
        pills: "",
    })

    const [disabled, setDisabled] = useState(true)

    useEffect(()=>{
        const vypZap = (
            (tempStorage.food <= 0 || tempStorage.food === "" ) && 
            (tempStorage.vaccine <= 0 || tempStorage.vaccine === "" ) && 
            (tempStorage.pills <= 0 || tempStorage.pills === "")
            )
        setDisabled(vypZap)

    },[tempStorage])
    
    const onChange = (e) => {
        const source = e.target.name
        switch(source){
            case "food" : {setTempStorage({...tempStorage, food : e.target.value})};break;
            case "vaccine" : {setTempStorage({...tempStorage,vaccine : e.target.value})};break;
            case "pills" : {setTempStorage({...tempStorage,pills : e.target.value})};break;
            default: break;
        }
    }

    const handleClick = () => {

        const outputStorage = {
            food: tempStorage.food === "" ? 0 : parseInt(tempStorage.food),
            vaccine: tempStorage.vaccine === "" ? 0 : parseInt(tempStorage.vaccine),
            pills: tempStorage.pills === "" ? 0 : parseInt(tempStorage.pills),
        }
        onAdd(outputStorage)
        setTempStorage({
            food: "",
            vaccine: "",
            pills: "",
        })
    }



    return (
        <div className="text-center row formular justify-content-center mt-2">
            <input type="number" placeholder="jídlo (kg)"  onChange={onChange} name="food" value={tempStorage.food} className="form-control m-1" />
            <input type="number" placeholder="vakcíny (ks)" onChange={onChange} name="vaccine" value={tempStorage.vaccine} className="mt-2 form-control m-1" />
            <input type="number" placeholder="prášky (ks)"  onChange={onChange} name="pills" value={tempStorage.pills} className="mt-2 form-control m-1" />
            <button disabled={disabled} min="0" onClick={handleClick} className="btn btn-sm btn-success w-50 mt-2">Přidat zásoby</button>
        </div>
    )
}

export default ShelterForm
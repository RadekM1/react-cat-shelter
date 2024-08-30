import "./Toggle.css"


const Toggle = ({dataIn, onClick}) => {


let flexTrida = dataIn == 2 ?"-outline" : ""
let flexTridaDva = dataIn == 1 ? "-outline" : ""



const trida = `m-2 btn btn${flexTrida}-secondary`
const tridaDva = `m-2 btn btn${flexTridaDva}-secondary`

return (

<div className="row justify-content-center">
<div className="col-2 d-flex justify-content-center">
    <button className={trida} name="toggleJedna" onClick={onClick}>Kočky</button>
</div>
<div className="col-2 d-flex justify-content-center">
    <button className={tridaDva} name="toggleDva" onClick={onClick} >Zásoby</button>
</div>

</div>


)
}

export default Toggle
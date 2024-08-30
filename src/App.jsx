import { useEffect, useState } from "react"
import catsImport from "./catsData.json"
import Container from "./components/container/Container"
import CatList from "./components/catList/CatList"
import CatForm from "./components/catForm/CatForm"
import Toggle from "./components/toggle/Toggle"
import ShelterForm from "./components/shelterForm/ShelterForm"

function App() {
  
  const [listOfcats, setListOfCats] = useState(catsImport.cats)
  const [newCat, setNewCat] = useState({
    id: listOfcats.length > 0 ? Math.max(...listOfcats.map((cat)=>cat.id)) + 1 : 1,
    name: "",
    breed: "",
    age: "",
  })
  const [toggle, setToggle] = useState(1)
  const [reportAdd, setReportAdd] = useState("")

  const [Storage, setStorage] = useState({
    food: 15,
    vaccine: 5,
    pills: 15,
  })

  const oneCatReq = {
    food: 3,
    vaccine: 1,
    pills:3,
  }
  
  const totalReq = {
    food: (oneCatReq.food * listOfcats.length+1),
    vaccine: (oneCatReq.vaccine * listOfcats.length+1),
    pills: (oneCatReq.pills * listOfcats.length+1)
  }




  const handleDelete = (catToDel) =>{
    const temp = listOfcats.filter((cat)=> cat.id !== catToDel)
    setListOfCats(temp)
  }

  const handleToggle = (e) => {
    const source = e.target.name
    switch(source){
      case "toggleJedna": {setToggle(1)};break;
      case "toggleDva": {setToggle(2)};break;
      default: break;
    }
  }

  const handleChange = (e) => {
    const source = e.target.name
    const val = e.target.value
    let updatedCat
    switch(source){
      case "name": {updatedCat = {...newCat,name: val }};break
      case "breed": {updatedCat = {...newCat,breed: val }};break
      case "age": {updatedCat = {...newCat,age: val }};break
      default: break;
    }
    setNewCat(updatedCat)
  }

  const addCat = () => {

    if(Storage.food >= totalReq.food && 
      Storage.vaccine >= totalReq.vaccine &&
      Storage.pills >= totalReq.pills
      )
      {const tempCat = [...listOfcats,newCat ] 
      setListOfCats(tempCat)
      setReportAdd("")
      setNewCat({
      id: newCat.id + 1,
      name: "",
      breed: "",
      age: "",
      })
    }
    else{
      setReportAdd("nedostatečné množství zásob")
    }
  }

  const handleAdd = (outputStorage) => {

    setStorage({
      food: Storage.food + outputStorage.food,
      vaccine: Storage.vaccine + outputStorage.vaccine,
      pills: Storage.pills + outputStorage.pills,
  })
  } 
   
  return (
    <Container>
      <Toggle dataIn = {toggle} onClick ={handleToggle} />
      {toggle===1 &&
      <>
        <CatList dataIn = {listOfcats} handleClick  = {handleDelete} />
        <CatForm data = {newCat} onClick = {addCat} onChange={handleChange}/>
        <p className="text-center report">{reportAdd}</p>
        
      </>
      }
            {toggle===2 &&
      <>
        <h3 className="text-center mt-3">Formulář pro doplnění zásob</h3>
        <ShelterForm onAdd={handleAdd} />
        <div className="mt-4 text-center">
            <h3>Stav zásob:</h3>
            <p>Stav jídla: <b>{Storage.food} ks</b></p>
            <p>Stav vakcín: <b>{Storage.vaccine} ks</b></p>
            <p>Stav prášků: <b>{Storage.pills} ks</b></p>
        </div>
      </>
      }
    </Container> 
  )
}

export default App

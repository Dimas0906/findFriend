import React,{useState} from 'react'
import axios from 'axios'

function Find() {
    const [persons, setPersons] = useState([]);
    const handleFind = async () => {
       await axios.get("https://randomuser.me/api")
        .then((res) => {
            console.log(res)
            setPersons([...persons, res.data.results[0]])
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="container md:flex md:flex-col md:w-screen md:h-screen bg-blue-300">
            <h1 className="text-3xl my-3 font-bold text-center">Find International Friend</h1>
            <div className="grid grid-cols-5 gap-2 mx-8 overflow-y-scroll md:h-screen md:w-screen">
                {
                    persons.map((person, idx) => {
                        return (
                            <div key={idx} className="relative card md:flex md:flex-col border-4 border-black w-full h-full mx-3 py-3">
                                <img className="relative w-full" src={person.picture.large} alt="..." />
                                <span className="relative md:flex md:justify-center md:items-center my-2">Phone: {person.cell}</span>
                                <span className="relative md:flex md:justify-center md:items-center my-2">Name: {person.name.first}</span>
                                <span className="relative md:flex md:justify-center md:items-center my-2">Country: {person.location.country}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="md:flex md:justify-center md:items-center">
                <button className="md:bg-red-400 md:rounded-lg md:px-5 md:py-2 md:m-3" onClick={handleFind}>Find</button>
                <button className="md:bg-red-400 md:rounded-lg md:px-5 md:py-2 md:m-3" onClick={() => setPersons([])}>Reset</button>        
            </div>
        </div>
    )
}

export default Find

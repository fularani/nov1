import * as React from 'react'
import axios from "axios";
import Lists from './Components/Lists';
import SearchBar from './Components/SearchBar';
import "./App.css";

const App = () => {

  const [users, setUsers] = React.useState([])
  const [store, setStore] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getUsers=()=>{
        axios
          .get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
          .then(res => {
            const newdata=res.data.results.map((result)=>({
              name:`${result.name.first} ${result.name.last}`,
              id:result.registered
            }))
            setLoading(true)
            setUsers(newdata)
            setStore(newdata)
          })
          .catch(err => console.error(err));
  }
  
  React.useEffect(() => {
    getUsers()
  }, [])

  const filterNames=(event)=>{
      const filteredData=store.filter((item)=>(
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
      ))
      setUsers(filteredData)
  }
  
  return (
    <div>
    {loading?(
      <div className='card'>
      <div className='header'>
      NAME LIST
      </div>      
      <SearchBar searchFunction={filterNames}/>
      <Lists usernames={users}/>
      </div>
    ):<div className='loader'></div>}
    </div>    
  )
}

export default App

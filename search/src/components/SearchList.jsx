import { useState } from 'react'
import './App.css'

function SearchList() {
  let someData = [
    {
      id: 1,
      title: "Title One",
      description: "Some description"
    },

    {
      id: 1,
      title: "Title One",
      description: "Some description"
    },

    {
      id: 1,
      title: "Title One",
      description: "Some description"
    },

    {
      id: 1,
      title: "Title One",
      description: "Some description"
    },
  ]
  
  let [searchText, setSearchText] = useState("")
  return (
    <>
      <input type="search" name="" id=""  />
    </>
  )
}

export default SearchList;

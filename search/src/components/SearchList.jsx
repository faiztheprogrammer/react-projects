import { useState } from 'react'
import '../App.css'

function SearchList() {
  let someData = [
    {
      id: 1,
      title: "Title One",
      description: "Some description"
    },

    {
      id: 2,
      title: "Title Two",
      description: "Some description"
    },

    {
      id: 3,
      title: "Title Three",
      description: "Some description"
    },

    {
      id: 4,
      title: "Title Four",
      description: "Some description"
    },
  ]

  let [searchText, setSearchText] = useState("")

  let filteredData = someData.filter((item) => {
    const text = searchText.toLowerCase()
    const combined = Object.values(item).join(" ").toLowerCase()
    return combined.includes(text)
  })
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <input
          value={searchText}
          type="search" name="" id="" placeholder='Search items...'
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: "8px 12px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        <ul style={{ listStyle: "none", marginTop: "20px", padding: 0 }}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <li
                key={item.id}
                style={{
                  background: "#f2f2f2",
                  margin: "8px auto",
                  padding: "10px",
                  width: "250px",
                  borderRadius: "6px",
                }}
              >
                <strong>{item.name}</strong>
                <p style={{ margin: "5px 0", fontSize: "14px" }}>{item.title}</p>
                <p style={{ margin: "5px 0", fontSize: "12px" }}>
                  {item.description}
                </p>
              </li>
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </div>
    </>
  )
}

export default SearchList;

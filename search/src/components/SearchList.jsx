// import { useState } from 'react'
// import '../App.css'

// function SearchList() {
//   let someData = [
//     {
//       id: 1,
//       title: "Title One",
//       description: "Some description"
//     },

//     {
//       id: 2,
//       title: "Title Two",
//       description: "Some description"
//     },

//     {
//       id: 3,
//       title: "Title Three",
//       description: "Some description"
//     },

//     {
//       id: 4,
//       title: "Title Four",
//       description: "Some description"
//     },
//   ]

//   let [searchText, setSearchText] = useState("")

//   let filteredData = someData.filter((item) => {
//     const text = searchText.toLowerCase()
//     const combined = Object.values(item).join(" ").toLowerCase()
//     return combined.includes(text)
//   })
//   return (
//     <>
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         <input
//           value={searchText}
//           type="search" name="" id="" placeholder='Search items...'
//           onChange={(e) => setSearchText(e.target.value)}
//           style={{
//             padding: "8px 12px",
//             width: "250px",
//             borderRadius: "6px",
//             border: "1px solid #ccc",
//           }}
//         />

//         <ul style={{ listStyle: "none", marginTop: "20px", padding: 0 }}>
//           {filteredData.length > 0 ? (
//             filteredData.map((item) => (
//               <li
//                 key={item.id}
//                 style={{
//                   background: "#f2f2f2",
//                   margin: "8px auto",
//                   padding: "10px",
//                   width: "250px",
//                   borderRadius: "6px",
//                 }}
//               >

//                 <strong><p style={{ margin: "5px 0", fontSize: "14px" }}>{item.title}</p></strong>
//                 <p style={{ margin: "5px 0", fontSize: "12px" }}>
//                   {item.description}
//                 </p>
//               </li>
//             ))
//           ) : (
//             <p>No results found</p>
//           )}
//         </ul>
//       </div>
//     </>
//   )
// }

// export default SearchList;




import { useState } from "react";

function SearchList() {
  let data = [
    {
      id: 1,
      title: "The AI revolution is here!",
      description:
        "Extensive use of technology is changing the way we work and operate. Know how!",
    },
    {
      id: 2,
      title: "How looking for external validation weakens a man?",
      description:
        "Modern dilemna of our time is to seek external validation at scale.",
    },
    {
      id: 3,
      title:
        "This is how psychological pressure at a younger age shapes our adulthood",
      description:
        "One of the great tragedies of our lives is to be pressured so much one is pushed to the edge",
    },
  ];

  let [inputText, setInputText] = useState("");

  const filteredData = data.filter((item) => {
    let text = inputText.toLowerCase();
    let combined = Object.values(item).join(" ").toLowerCase();
    return combined.includes(text);
  });

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        backgroundColor: "#FAFAFA",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "30px",
        textAlign: "center",
      }}
    >
      <input
        type="text"
        value={inputText}
        placeholder="🔍 Search articles..."
        onChange={(e) => setInputText(e.target.value)}
        style={{
          padding: "10px 15px",
          width: "100%",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
          boxSizing: "border-box",
          transition: "border-color 0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#7AB2B2")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <div style={{ marginTop: "25px" }}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#F9F9F9",
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                padding: "15px 20px",
                marginBottom: "15px",
                textAlign: "left",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px",
                  color: "#333",
                  fontSize: "18px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#555",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                {item.description}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#777", marginTop: "20px" }}>No results to show</p>
        )}
      </div>
    </div>
  );
}

export default SearchList;

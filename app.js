/****
 *   <div id = "parent">
 *         <div id= "child">
 *                <h1>  hey ! i am h1 </h1>
 *           </div>
 *  </ div>
 * 
 * 
 *  */ 


//  const heading =  React.createElement(
//     "h1",
//      {
//         id: "heading",
//         xyz : "akash"
//        },
//   "hello world from the react")


 const heading = React.createElement("div",
  { id :"parent"},  [
    React.createElement("div"
    , { id: "child"},
           [
          React.createElement("h1",
           { } ,"<h1> hey! i am  h1 </h1>"  ) ,
          React.createElement("h2", 
             { } ,"<h2> hey! i am  h1 </h2>"  ) 
         ])
         , React.createElement("div"
         ,
          { id: "child"},
                [
               React.createElement("h1",
                { } ,"<h1> hey! i am  h1 </h1>"  ) ,
               React.createElement("h2", 
                  { } ,"<h2> hey! i am  h1 </h2>"  ) 
              ])

  ]
  )



   console.log(heading);    // object ( this pbject is an react element)

  const root =  ReactDOM.createRoot(document.getElementById("root"))
   root.render(heading)
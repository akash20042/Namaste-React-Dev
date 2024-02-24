/***
 *  <div id = "parent">
 *  <div id = "child 1"> 
 *           <h1> hi this is h1 <h1/>
 *     <div/>
 *  <div id = "child 2"> 
 *           <h1> hi this is h1 <h1/>
 *     <div/>
 * 
 *  </div> 
 *  React Element (object) =  html(brouser understnding)
 */


/***
 *  const heading =  React.createElement(
     "h1",
     {
        id: "heading",
       xyz : "akash"
        },
   "hello world from the react")


 * 
 * 
 * 
 */


const heading = React.createElement("div", { id :"parent"} , [
React.createElement("div", { id :"child"} , [ 
React.createElement("h1", {} , " hi this is h1  bro ! "  ) ,
React.createElement("h2", {} , " hi this is h2  bro ! "  )  ]
) ,
React.createElement("div", { id :"child"} , [ 
React.createElement("h1", {} , " hi this is h1  bro ! "  ) ,
React.createElement("h2", {} , " hi this is h2  bro ! "  )  ]
) ]
)

 const  root = ReactDOM.createRoot(document.getElementById("root"))
      root.render(heading)

   /**
    *  reder method replace the tag which is present in root tag
    * 
    */
// import { useEffect, useRef, useState } from "react"
// import './style.css'

// const SecondInfoText = ({text}) => {
//   const [rigth, setLeft] = useState(25)
//   useEffect(() => {
//     setLeft(-window.scrollY * 1.5)
//   }, [window.scrollY])

//   const ref = useRef()
//   return (
//     <div className="infotext" ref={ref} style={{ width: "200px",  position: 'fixed', right: 10 + rigth}}>
//       <h1 className="text-focus-in">{text}</h1>
//     </div>
//   )
// }

// export default SecondInfoText
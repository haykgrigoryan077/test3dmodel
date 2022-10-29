// import { useEffect, useRef, useState } from "react"
// import './style.css'

// const PageInfoText = ({text}) => {
//   const [left, setLeft] = useState(25)
//   useEffect(() => {
//     setLeft(-window.scrollY * 1.5)
//   }, [window.scrollY])

//   const ref = useRef()
//   return (
//     <div className="second" ref={ref} style={{ width: "200px",  position: 'fixed', left: 25 + left}}>
//       <h1 className="text-focus-in">{text}</h1>
//     </div>
//   )
// }

// export default PageInfoText
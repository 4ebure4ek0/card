import { useState } from "react";
import BackCard from "./components/backCard/backCard";
import FrontCard from "./components/frontCard/frontCard";

export default function App() {
    const [rotate, setRotate] = useState(false)
    const [showRequisites, setShowRequisites] = useState(true)
    return (
    <div className="container">
        <div className="card_container" onClick={(e) => !e.target.classList.contains('requisit') && setRotate(!rotate)}>
            <FrontCard rotate={rotate} showRequisites={showRequisites} setShowRequisites={setShowRequisites}/>
            <BackCard rotate={rotate} showRequisites={showRequisites} setShowRequisites={setShowRequisites}/>
        </div>
    </div>
  )
}

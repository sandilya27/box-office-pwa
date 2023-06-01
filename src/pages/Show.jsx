import { useParams } from "react-router-dom"

const Show = () => {
    const params=useParams();
    console.log(params);
  return (
    <div>Show</div>
  )
}

export default Show
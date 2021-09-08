import { useParams } from "react-router-dom"

export function Products() {
    const { id } = useParams();

    return <h1>Parâmetro da URL: {id}</h1>
  }
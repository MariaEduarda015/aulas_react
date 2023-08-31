import { Link } from "react-router-dom"

function home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/usuarios">Usuários</Link>
    </div>
  )
}

export default home
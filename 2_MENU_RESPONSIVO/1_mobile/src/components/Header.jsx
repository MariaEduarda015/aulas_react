
import { List} from "@phosphor-icons/react"

import style from "./Header.module.css"

function Header() {
  return (
    <header className={style.header}>
        <div className={style.mobile}>
            <div className={style.menu}>
                <button>
                    <List size={32} />
                </button>

                <h1>Logo</h1>
            </div>
            <div className={style.options}>
              <nav>
                <a href="">Home</a>
                <a href="">Resultados</a>
                <a href="">Produtos</a>
                <a href="">Login</a>
              </nav>
            </div>
        </div>
    </header>
  )
}

export default Header
import { Link } from "react-router-dom";

function TopMenu() {
    return (
<body>
    <div id="container">
        <aside>
            <header>
                <h4> LINA BENGTSSON </h4>
            </header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
          
        </aside>    
    </div>
</body>
    )
  }
export default TopMenu;
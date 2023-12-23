import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 px-4 py-4 border-b border-stone-200 font-pizza">
      <Link to="/" className="tracking-widest uppercase">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username/>
    </header>
  );
}

export default Header

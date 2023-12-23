import { useSelector } from "react-redux";
import { getUsername } from "./userSlice";

function Username() {
  const username = useSelector(getUsername);
  // console.log(username);
  if (!username) return null;

  return (
    <div className=" text-sm font-semibold md:block">Hello {username}</div>
  );
}

export default Username;

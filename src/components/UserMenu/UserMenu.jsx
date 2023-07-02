import useAuth from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import css from './UserMenu.module.css';
import { Button } from "@mui/material";

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
  
    return (
      <div className={css.wrapper}>
        <p className={css.username}>Welcome, {user.name}</p>
        <Button variant="contained" className={css.button} type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Button>
      </div>
    );
  };
  export default UserMenu;
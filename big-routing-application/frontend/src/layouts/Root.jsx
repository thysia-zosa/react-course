import { Fragment } from "react";
import { Outlet, /* useNavigation */ } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // const navigation = useNavigation();
  
  return (
    <Fragment>
      <MainNavigation />
      <main>
        {/* That's one way */}
        {/* {navigation.state==='loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;

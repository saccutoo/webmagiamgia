import React from 'react';
import './App.css';
import BodyScreen from './component/body/Body.Screen'
import BodyScreen2 from './component/body/BodyScreen2';
import { SetValueAction } from "react-select";
import { MomentProps } from "react-moment";
import { toast } from "react-toastify";
import { BrowserRouter as Router, Redirect, Route,Switch,useHistory } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ModalScreen from "./component/modal/Modal.Screen";
import BodyBlogGiamGiaScreen from './component/BodyBlogGiamGia/BodyBlogGiamGia.Screen';
import { CookiesProvider } from 'react-cookie';
import AppAdapter from './App.Adapter';

export const UserContext = React.createContext({
  userName: '',
});

function App() {
  const userInfo  = {};

  const {
    userName, setUserName
  } = AppAdapter();

  return (
    <div className="App">
      <>
      {/* <UserContext.Provider value={userInfo}>
        <Router>
          <Switch>.P
            <Route path="/">
              <BodyBlogGiamGiaScreen></BodyBlogGiamGiaScreen>
            </Route>      
          </Switch>
        </Router>
      </UserContext.Provider> */}
      <CookiesProvider>
      {
        userName &&
       <>
         <Router>
            <Switch>   
              <Route path="/"  component={BodyBlogGiamGiaScreen}></Route>  
              <Route path="/:menu/:ishasbreadcrumb/:merchantcode"  component={BodyBlogGiamGiaScreen}></Route> 
              <Redirect from="/" to="/" exact></Redirect>
              <Route path="*" render={BodyBlogGiamGiaScreen}></Route>
            </Switch>
          </Router>    
        <ModalScreen></ModalScreen>
       </>
      }
      </CookiesProvider>
  
    
      </>

    </div>
  );
}

export default App;

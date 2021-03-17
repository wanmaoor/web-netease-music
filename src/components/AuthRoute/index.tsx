import { Redirect, Route, RouteComponentProps } from "react-router"

const AuthRoute = (props: RouteComponentProps) => {
  console.log(document.cookie);
  if(document.cookie){
    return <Route  {...props}/>
  } else {
    return <Redirect to={'/login'}/>
  }
}

export default AuthRoute
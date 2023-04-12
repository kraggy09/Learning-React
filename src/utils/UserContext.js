import { createContext } from "react";
/*
Context works as a global variable. We can use it any where in the App. Or we can also say that it is like a state that can be accessed by anyone in the app. Basically it prevents us from drilling props if we want the data in more than one component
*/
const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
});
/*Used to get the unique name for the Context which is helpful while debugging */
UserContext.displayName = "UserContext";
export default UserContext;

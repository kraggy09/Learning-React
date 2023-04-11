import { createContext } from "react";
/*
Context works as a global variable. We can use it any where in the App. Or we can also say that it is like a state that can be accessed by anyone in the app. Basically it prevents us from drilling props if we want the data in more than one component
*/
const UserContext = createContext({
  user: {
    name: "Kaif",
    email: "kaifshaikh2013.sk@gmail.com",
  },
});
export default UserContext;

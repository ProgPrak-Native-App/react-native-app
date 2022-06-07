import React from "react";
import {useCurrentUser} from "../components/stores"
import Introduction from "./Introduction";
import Routers from "./Routers";

export default function AppWrapper() {
    const {user} = useCurrentUser();
    console.log(user, "wasggeht")
    return user ? <Routers/>: <Introduction/>
};
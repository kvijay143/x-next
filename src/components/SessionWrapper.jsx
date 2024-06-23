"use client";

import { SessionProvider } from "next-auth/react";

//mport { SessionProvider} from 'next-auth'
 
 
const SessionWrapper=({children})=>{
    return<SessionProvider>{children}</SessionProvider>
};

export default SessionWrapper;
 
"use client";

import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";
//mport { SessionProvider} from 'next-auth'
 
 
const SessionWrapper=({children})=>{

    return<SessionProvider>
        <RecoilRoot>
        {children}
        </RecoilRoot>
        </SessionProvider>
};

export default SessionWrapper;
 
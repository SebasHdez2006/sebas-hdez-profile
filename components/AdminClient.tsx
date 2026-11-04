"use client";
import { SessionProvider } from "next-auth/react";
import AdminPanel from "./AdminPanel";
export default function AdminClient() { return <SessionProvider><AdminPanel /></SessionProvider>; }

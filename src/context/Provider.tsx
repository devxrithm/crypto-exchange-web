// components/Providers.tsx
"use client";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import { store } from "./store";
import { isLoggedIn } from "./features/authSlice";

function AuthHydrator({ token }: { token: string | null }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoggedIn(token));
  }, [token, dispatch]);

  return null;
}

export default function Providers({
  children,
  cookieToken = null,
}: {
  children: React.ReactNode;
  cookieToken?: string | null;
}) {
  return (
    <Provider store={store}>
      <AuthHydrator token={cookieToken} />
      {children}
    </Provider>
  );
}

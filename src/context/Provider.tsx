// components/Providers.tsx
"use client";
import { isLoggedIn } from "@/src/context/features/authSlice";
import type { AppDispatch } from "@/src/context/store";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";

function AuthHydrator({ payload }: { payload: string | null }) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("AuthHydrator payload:", Boolean(payload),payload);
    if (Boolean(payload) === true) {
      dispatch(isLoggedIn());
    }
  }, [dispatch, payload]);

  return null;
}

export default function Providers({
  children,
  payload,
}: {
  children: React.ReactNode;
  payload: string | null;
}) {
  return (
    <Provider store={store}>
      <AuthHydrator payload={payload} />
      {children}
    </Provider>
  );
}

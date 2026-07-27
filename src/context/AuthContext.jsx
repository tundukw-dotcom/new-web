import { createContext, useContext, useMemo, useState } from "react";
import usersDb from "../data/users.json";

const STORAGE_KEY = "tunduk_active_pin";

const AuthContext = createContext(null);

function loadProfile(pin) {
  if (!pin) return null;
  return usersDb[pin] ?? null;
}

export function AuthProvider({ children }) {
  const [pin, setPin] = useState(() => sessionStorage.getItem(STORAGE_KEY));

  const profile = useMemo(() => loadProfile(pin), [pin]);

  const login = (nextPin) => {
    const found = loadProfile(nextPin);
    if (!found) return false;
    sessionStorage.setItem(STORAGE_KEY, nextPin);
    setPin(nextPin);
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setPin(null);
  };

  const value = useMemo(
    () => ({
      pin,
      isAuth: Boolean(profile),
      user: profile?.user ?? null,
      idCard: profile?.idCard ?? null,
      driver: profile?.driver ?? null,
      passport: profile?.passport ?? null,
      login,
      logout,
    }),
    [pin, profile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

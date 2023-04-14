import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'

export type Role = "Student" | "Faculty" | "Sponsor" | "Other" | "";

const RoleContext = createContext({
  userId: "",
  role: "" as Role,
  isLoading: true,
  setRole: (role: Role) => {},
});


function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, _setRole] = useState<Role>("");
  const [id, _setId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedRole = localStorage.getItem("role") as Role;
    const storedId = localStorage.getItem("id");
    if (storedRole) {
      _setRole(storedRole);
    }
    if (storedId) {
      _setId(storedId);
    }
    setIsLoading(false);
  }, []);

  function setRole(role: Role) {
    _setRole(role);
    const id = uuidv4()
    _setId(id)
    if (role) {
      localStorage.setItem("role", role);
    } else {
      localStorage.removeItem("role");
    }
    if (id) {
      localStorage.setItem("id", id);
    } else {
      localStorage.removeItem("id");
    }
  }

  const roleValue = {
    userId: id,
    isLoading,
    role,
    setRole,
  };

  // return <RoleContext.Provider value={roleValue}>{children}</RoleContext.Provider>;
  return <RoleContext.Provider value={roleValue}>{children}</RoleContext.Provider>;
}

export { RoleProvider, RoleContext };
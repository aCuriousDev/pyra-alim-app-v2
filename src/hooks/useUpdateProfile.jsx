import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { getAuth, updateProfile } from "firebase/auth";

const useUpdateProfile = () => {
  const [error, setError] = useState(null);
  const { auth } = getAuth();

  const update = (name) => {
    setError(null);
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {
        console.log("profile updated");
      })
      .catch((err) => setError(err.message));
  };

  return { error, update };
};

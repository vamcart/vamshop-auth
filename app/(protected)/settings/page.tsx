'use client';

import { signOut, useSession } from 'next-auth/react';

export const SettingsPage = () => {
  const session = useSession();
  const onClick = () => {
    signOut();
  };
  return (
    <>
      <div>{JSON.stringify(session)}</div>
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </>
  );
};

export default SettingsPage;

'use client';

import { logout } from '@/actions/logout';
import { useSession } from 'next-auth/react';

export const SettingsPage = () => {
  const session = useSession();
  const onClick = () => {
    logout();
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

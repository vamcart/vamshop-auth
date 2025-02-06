'use client';

import { logout } from '@/actions/logout';
import { useCurrentUser } from '@/hooks/user';

export const SettingsPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };
  return (
    <>
      <div>{JSON.stringify(user)}</div>
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </>
  );
};

export default SettingsPage;

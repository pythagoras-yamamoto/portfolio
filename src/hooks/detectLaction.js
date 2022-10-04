import React from 'react';
import { useRouter } from 'next/router';

export const DetectLocation = props => {
  const router = useRouter();
  const onClick = () => {
    alert(router.pathname);
  };
  return <button onClick={onClick}>show location</button>;
}

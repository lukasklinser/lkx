import { useEffect, useState } from 'react';
import getConfig from 'next/config';

const LastUpdated = () => {
  const [modifiedDate, setModifiedDate] = useState<string>('');

  useEffect(() => {
    const { publicRuntimeConfig } = getConfig();
    setModifiedDate(publicRuntimeConfig.modifiedDate);
  }, []);

  const formattedDate = new Date(modifiedDate).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return <div>Last updated: {formattedDate}</div>;
};

export default LastUpdated;

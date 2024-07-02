import { FC  } from 'react';
import { useQuery } from '@ray-js/ray';

import EmptyCodeForm from './component/EmptyCodeForm';

const Index: FC = () => {
  const query = useQuery();
  return (
    <>
      <EmptyCodeForm {...query} />
     </>
  );
};

export default Index;

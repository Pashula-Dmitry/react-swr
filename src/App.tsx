import React, { FC } from 'react';
import useSWR from 'swr';

const App: FC = () => {
  const { data, error } = useSWR(`/posts`);
  console.log('data => ', data);
  console.log('error => ', error);

  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <ul>
      {
        data.map((post: any) => (<li key={post.id}>{post.title}</li>))
      }
    </ul>
  );
};

export default App;

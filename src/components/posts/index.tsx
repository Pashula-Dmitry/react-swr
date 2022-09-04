import React, { FC } from 'react';
import useSWR from 'swr';
import { fetcherAxios } from '../../index';
import { Post } from 'src/types/interfaces';

const Posts: FC = () => {
  const { data, error } = useSWR<Post[]>(`/posts`);

  if (!data) {
    return <div>Loading</div>;
  }

  return (
    <ul>
      {
        data.map((post: Post) => (<li key={post.id}>{post.title}</li>))
      }
    </ul>
  );
};

export default Posts;

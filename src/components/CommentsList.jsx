
import React, { useState } from 'react';
 
export default function  CommentsList () {
  const [comments, setComments] = useState([
    { id: 1, text: "Это первый комментарий" },
    { id: 2, text: "Это второй комментарий" },
    { id: 3, text: "Это третий комментарий" }
  ]);
 
  const handleDelete = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };
 
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.text}
          <button onClick={() => handleDelete(comment.id)}>Удалить</button>
        </div>
      ))}
    </div>
  );
};
 
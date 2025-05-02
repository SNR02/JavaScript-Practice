import React, { memo, useState } from 'react';

const UserList = memo(({ users }) => {
  console.log("UserList re-rendered");
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <UserList users={users} />
    </div>
  );
};

export default ParentComponent;

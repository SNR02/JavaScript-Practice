import React, { useState, useMemo } from 'react';

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" }
];

const SearchableUserList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]); // Only re-calculate when searchTerm changes

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search users..." />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchableUserList;

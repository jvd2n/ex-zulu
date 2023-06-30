import React from 'react';

function User({user, onRemove, onToggle}) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>Del</button>
    </div>
  )
}
function UserList({users, onRemove, onToggle}) {
  // const users = [
  //   {
  //     id: 1,
  //     username: 'velopert',
  //     email: 'public.velopert@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     username: 'tester',
  //     email: 'tester@example.com'
  //   },
  //   {
  //     id: 3,
  //     username: 'liz',
  //     email: 'liz@example.com'
  //   }
  // ];
  return (
    <div>
      {users.map(user => (
        <User 
        user={user} 
        key={user.id} 
        onRemove={onRemove}
        onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
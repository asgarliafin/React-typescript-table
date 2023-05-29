import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { fetchUsers } from '../features/user/userSlice';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const UserList: React.FC = (): JSX.Element => {

const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  const { users, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {users.map(({id, username, email, address : {street, city}, company : {name}}) => (
        <div key={id}>
          <p>ID: {id}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Street: {street}</p>
          <p>City: {city}</p>
          <p>Company Name: {name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;

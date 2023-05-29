import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { fetchUsers } from '../features/user/userSlice';
import BasicTable from './BasicTable';
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
      <BasicTable users={users} />
    </div>
  );
};

export default UserList;

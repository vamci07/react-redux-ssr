import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../store/actions';

function loadData(store) {
  return store.dispatch(fetchUsers());
}

function Users({ users = [], fetchUsers }) {
  React.useEffect(() => {
    fetchUsers();
  }, []);

  const renderUsers = () => {
    return users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  };

  return (
    <div>
      List of users <ul>{renderUsers()}</ul>
    </div>
  );
}

function mapStateToProps(state) {
  return { users: state.users };
}

export { loadData };
export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(Users)
};

import _ from 'lodash';

const usersSelectors = {};

usersSelectors.getUsers = (state) => state.users || [];

usersSelectors.getUser = (id) => (state) => _.find(state.users, ({_id}) => _id === id) || {};

export default usersSelectors;

const currentUserSelectors = {};

currentUserSelectors.getCurrentUserId = (state) => state.currentUser.id;

export default currentUserSelectors;

const currentUserSelectors = {};

currentUserSelectors.getCurrentUserId = (state) => state.currentUser.id;

currentUserSelectors.getCurrentUserAvatarData = (state) => state.currentUser.avatarData;

export default currentUserSelectors;

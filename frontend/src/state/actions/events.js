export const toggleNetworkOperation = () => {
    return {
      type: 'TOGGLE_NETWORK_OPERATION'
    }
};

export const toggleConfirmDelete = (id) => {
    return {
      type: 'TOGGLE_CONFIRM_DELETE',
      id
    }
};
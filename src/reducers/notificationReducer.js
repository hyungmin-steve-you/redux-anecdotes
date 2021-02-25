const reducer = (state = 'initial message!', action) => {
  switch(action.type) {
    case 'VOTED':
      return `You voted for "${action.data.message}"`
    case 'ADDED':
      return `You created "${action.data.message}"`
    case 'REMOVED' :
      return ''
    default:
      return state
  }
}

export const voteNotification = message => {
  return {
    type: 'VOTED',
    data: {
      message
    }
  }
}

export const addNotification = message => {
  return {
    type: 'ADDED',
    data: {
      message
    }
  }
}

export const removeNotification = () => {
  return {
    type: 'REMOVED',
  }
}

export default reducer
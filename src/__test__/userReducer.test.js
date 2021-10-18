import userReducer from '../Reducers/userReducer';

describe('Reducers', () => {
  const action = {
    type: 'SIGN-UP',
    data: [
      { user: 'user', id: 1 },
    ],
  };

  it('user reducer has an initial state', () => {
    expect(userReducer([], {})).toEqual([]);
  });

  it('user reducer has user in state', () => {
    expect(userReducer({}, action)).not.toEqual({});
  });
});

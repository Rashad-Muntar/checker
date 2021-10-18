import categoryReducer from '../Reducers/categoryReducer';

const mockData = {
  data: [
    { crypto1: 'cat1', ids: 1 },
    { crypto2: 'cat2', ids: 2 },
    { crypto3: 'cat3', ids: 2 },
  ],
};

describe('Reducers', () => {
  const action = {
    type: 'FETCH-CATEGORIES',
    data: [
      { crypto1: 'cat1', ids: 1 },
      { crypto2: 'cat2', ids: 2 },
      { crypto3: 'cat3', ids: 2 },

    ],
  };

  it('category reducer has an initial state', () => {
    expect(categoryReducer([], {})).toEqual([]);
  });

  it('category reducer has categories in state', () => {
    expect(categoryReducer({}, action)).toEqual(mockData);
  });

  it('crypto reducer has categries in state', () => {
    expect(categoryReducer({}, action)).not.toEqual({});
  });
});

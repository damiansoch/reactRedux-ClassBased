const initialState = [
  {
    id: 1,
    firstName: 'Damian',
    lastName: 'Socha',
    age: '37',
    description: 'Best pal ever',
    thumbnail: 'https://picsum.photos/id/1/200',
  },
  {
    id: 2,
    firstName: 'Kinga',
    lastName: 'Socha',
    age: '36',
    description: 'Best wife ever',
    thumbnail: 'https://picsum.photos/id/2/200',
  },
  {
    id: 3,
    firstName: 'Milena',
    lastName: 'Socha',
    age: '13',
    description: 'Best daughter ever',
    thumbnail: 'https://picsum.photos/id/3/200',
  },
  {
    id: 4,
    firstName: 'Szymon',
    lastName: 'Socha',
    age: '3',
    description: 'Best son ever',
    thumbnail: 'https://picsum.photos/id/4/200',
  },
  {
    id: 5,
    firstName: 'Oreo',
    lastName: 'Socha',
    age: '1',
    description: 'Best dog ever',
    thumbnail: 'https://picsum.photos/id/5/200',
  },
];

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default UsersReducer;

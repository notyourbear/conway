import Conway from '../src/client/conway';

test('Conway.board', () => {
  const test = Conway(2, 2, [[0, 0]]);
  expect(test.board).toEqual([[true, false], [false, false]]);
});

test('Conway.tick', () => {
  const test = Conway(3, 3, [[0, 1], [1, 1], [2, 1]]);
  test.board = test.tick(test.board);
  expect(test.board).toEqual([[false, false, false], [true, true, true], [false, false, false]]);
});

test('Conway.changeState', () => {
  const test = Conway(2, 2, []);
  test.board = test.changeState(test.board, [0, 0]);
  expect(test.board).toEqual([[true, false], [false, false]]);
});

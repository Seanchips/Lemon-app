import { initializeTimes, updateTimes } from '../components/times';

test('initializeTimes returns the correct initial times', () => {
  const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

test('updateTimes returns the same value provided in the state', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00'];
  const action = { type: 'update', payload: ['18:00', '19:00', '20:00'] };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(action.payload);
});

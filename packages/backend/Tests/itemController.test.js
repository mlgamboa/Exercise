const itemRepo = require('../Repo/itemRepo');
const dbConnection = require('../Config/dbConfig');
jest.mock('../Config/dbConfig');

let request;
let testResponse;

beforeAll(() => {
  jest.spyOn(dbConnection, 'query').mockImplementation(() => Promise.resolve({}));
});

afterAll(() => {
  dbConnection.end();
  jest.restoreAllMocks();
});

// Test for getting all elements in the database
it('Should return a not null value of items', () => {
  itemRepo.getAllItems(request, (response) => {
    testResponse = response;
    expect(testResponse).toEqual({});
    resolve();
  });
});

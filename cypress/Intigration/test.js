import DynamicTablePage from '../support/Page Objects/DynamicTablePage';

describe('Table Data Test', () => {
  const testDataPath = 'testData.json';
  let testData;
  const dynamicTablePage = new DynamicTablePage();

  before(() => {
    cy.fixture(testDataPath).then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    // Open the target web page and click on the "Table Data" button before each test
    dynamicTablePage.visit();
    dynamicTablePage.clickTableDataButton();
  });

  it('Inserts data and asserts table content, excluding the first row', () => {
    // Insert test data and refresh the table
    dynamicTablePage.insertDataAndRefreshTable(testData);
    // Iterate through each row in the test data
    testData.forEach((expectedData, index) => {
      // Retrieve all cells in the corresponding row of the table
      dynamicTablePage.getTableRow(index).find('td').each((cell, columnIndex) => {
        // Trim and compare each cell text individually
        const actualvalue = cell.text().trim();
        const key = Object.keys(expectedData)[columnIndex];
        const expectedValue = expectedData[key].toString().trim();
        expect(actualvalue).to.equal(expectedValue);
      });
    });
  });
});
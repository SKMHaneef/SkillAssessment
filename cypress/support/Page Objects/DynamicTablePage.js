class DynamicTablePage {
    visit() {
      cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
    }
  
    clickTableDataButton() {
        cy.contains('summary','Table Data').click();
    }
  
    insertDataAndRefreshTable(data) {
        cy.get('#jsondata').clear().type(JSON.stringify(data),{ parseSpecialCharSequences: false });
        cy.get('#refreshtable').click();
    }
  
    getTableRow(index) {
      return cy.get(`#dynamictable tr:gt(0):eq(${index})`);
    }
  }
  
  export default DynamicTablePage;
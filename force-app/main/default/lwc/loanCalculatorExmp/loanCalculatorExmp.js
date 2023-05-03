import { api, LightningElement, track } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import sheetjs from '@salesforce/resourceUrl/sheetjs';
import formulaSheet from '@salesforce/resourceUrl/formulaSheet';
let XLS = {};
export default class LoanCalculatorExmp extends LightningElement {
    @track loanAmount = 0;
    @track interestRate = 0;
    @track loanTerm = 0;
    @track monthlyPayment = 0;
    @track workbook;
    
    @api async connectedCallback() {
        await loadScript(this, sheetjs);
        console.log('xlsx', XLSX.version);
        XLS = XLSX;
    }

    handleLoanAmountChange(event) {
        this.loanAmount = event.target.value;
    }

    handleInterestRateChange(event) {
        this.interestRate = event.target.value;
    }

    handleLoanTermChange(event) {
        this.loanTerm = event.target.value;
    }
    
    calculateMonthlyPayment() {
        this.formulaSheet = XLS.readFile(formulaSheet);
        console.log('workbook', this.workbook);
    }

    handleCalculate(){
        this.calculateMonthlyPayment();
    }
}
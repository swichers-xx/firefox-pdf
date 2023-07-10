const { browser } = require('webextension-polyfill-ts');

class AutoSavePDF {
constructor() {
this.pdfSaver = new PDFSaver();
}

initialize() {
browser.tabs.onUpdated.addListener(this.onTabUpdated.bind(this));
}

onTabUpdated(tabId, changeInfo, tab) {
if (changeInfo.url) {
this.pdfSaver.saveAsPDF(changeInfo.url);
}
}
}

class PDFSaver {
saveAsPDF(url) {
// Convert the website to PDF using pdf.js
// Save the PDF file using the fs module
}

getFileName(url) {
// Generate a file name based on the website's title or URL and the current timestamp
}

getSaveDirectory() {
// Read the directory from the extension's settings
}
}

const autoSavePDF = new AutoSavePDF();
autoSavePDF.initialize();

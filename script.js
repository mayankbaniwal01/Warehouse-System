function processBarcode() {
    const input = document.getElementById('barcodeInput').value;
    const result = document.getElementById('pickingResult');
    if (input) {
        result.textContent = `Order for barcode ${input} has been processed!`;
    } else {
        result.textContent = 'Please scan a barcode!';
    }
}

function startPacking() {
    const instructions = document.getElementById('packingInstructions');
    instructions.classList.toggle('hidden');
    if (!instructions.classList.contains('hidden')) {
        alert('Packing instructions are now visible.');
    }
}
// Picking Process Simulation
function startPicking() {
    const instructions = [
        "Go to aisle 3, shelf 5.",
        "Scan the barcode on the shelf.",
        "Pick the item and place it in the bin.",
        "Move to the next location."
    ];

    let output = document.getElementById("picking-output");
    let step = 0;

    const interval = setInterval(() => {
        if (step < instructions.length) {
            output.innerText = instructions[step];
            step++;
        } else {
            output.innerText = "Picking process completed!";
            clearInterval(interval);
        }
    }, 2000);
}

function convertHexToRgb() {
    const hexInput = document.getElementById('hexInput').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // Ajouter automatiquement le "#" si absent
    let hex = hexInput;
    if (!hex.startsWith('#')) {
        hex = '#' + hex;
    }

    if (!hex.startsWith('#') || !/^[#][A-Fa-f0-9]{3,6}$/.test(hex)) {
        resultDiv.innerHTML = '<span style="color: red;">Veuillez entrer une couleur HEX valide (ex: FFFFFF).</span>';
        return;
    }

    hex = hex.slice(1);

    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    resultDiv.innerHTML = `
        <span>R : ${r.toFixed(3)} <button onclick="copyValue(${r.toFixed(3)})">Copier</button></span>
        <span>G : ${g.toFixed(3)} <button onclick="copyValue(${g.toFixed(3)})">Copier</button></span>
        <span>B : ${b.toFixed(3)} <button onclick="copyValue(${b.toFixed(3)})">Copier</button></span>
    `;
}

function copyValue(value) {
    const tempInput = document.createElement('textarea');
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert(`Valeur copiée : ${value}`);
}
//ini komen

function konversiSuhu() {
    var input = document.getElementById("inputSuhu").value;
    var hasilTextArea = document.getElementById("hasilKonversi");
    var carakalkulasi = document.getElementById("caraKalkulasi")
    if (input !== -1) {
        // Konversi dari Celcius ke Fahrenheit
        suhu = parseFloat(input);
        var fahrenheit = (suhu * 9/5) + 32;
        hasilTextArea.value = fahrenheit.toFixed(1) + "°F";
        carakalkulasi.value = "("  + input + "* 9/5) + 32";
    }else {
        hasilTextArea.value = "Format suhu tidak valid. Harap masukkan suhu dalam format °C atau °F.";
    }
}
function resetForm() {
    document.getElementById("inputSuhu").value = "";
    document.getElementById("hasilKonversi").value = "";
    document.getElementById("caraKalkulasi").value = "";
}
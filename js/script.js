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

//display
function switchForm() {
    let form1 = document.getElementById('Form1');
    let form2 = document.getElementById('reverseForm2');

    if (form1.style.display == 'none') {
        form1.style.display = 'block';
        form2.style.display = 'none';
    } else {
        form1.style.display = 'none';
        form2.style.display = 'block';
    }
}

//hasil Fahrenheit
function konversiSuhuF() {
    var input = document.getElementById("inputSuhuFahrenheit").value;
    var hasilhitung = document.getElementById("hasilCelsius");
    var carakalkulasi = document.getElementById("caraKalkulasiFahr")
    if (input !== -1) {
        // Konversi dari Fahrenheit ke Celsius
        
        var fahrenheit = (input - 32)*5/9;
        hasilhitung.value = fahrenheit.toFixed(1) + "°C";
        carakalkulasi.value = "("  + input + "- 32)x5/9";
    }else {
        hasilhitung.value = "Format suhu tidak valid. Harap masukkan suhu dalam format °C atau °F.";
    }
}

//reset form celsius

function resetFormC() {
    document.getElementById("inputSuhu").value = "";
    document.getElementById("hasilKonversi").value = "";
    document.getElementById("caraKalkulasi").value = "";
}

function resetFormF() {
    document.getElementById("inputSuhuFahrenheit").value = "";
    document.getElementById("hasilCelsius").value = "";
    document.getElementById("caraKalkulasiFahr").value = "";
}
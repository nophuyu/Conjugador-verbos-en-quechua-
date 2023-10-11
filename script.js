document.getElementById('conjugateButton').addEventListener('click', conjugateVerb);

function conjugateVerb() {
    const verbSelect = document.getElementById('verbosSelect');
    const conjugationResult = document.getElementById('conjugationResult');

    const selectedVerb = verbSelect.value;

    if (!selectedVerb) {
        conjugationResult.textContent = "Selecciona un verbo.";
        return;
    }

    // Insertar la lógica para conjugar el verbo  quechua en presente
    // ¿?Cómo usar un objeto con las conjugaciones regulares e irregulares.

    // Ejemplo
    const conjugatedVerb = conjugarVerboEnPresente(selectedVerb);

    conjugationResult.textContent = conjugatedVerb;
}

function conjugarVerboEnPresente(verbo) {
    // Escribir  lógica de conjugación del verbo en presente
    //  Incluir reglas para verbos regulares e irregulares ¿?
    // Devolver el resultado conjugado
    return `Ñuqa ${verbo}ni, Qam ${verbo}nki, Pay ${verbo}n, Ñuqanchik ${verbo}nchik, Ñuqayku ${verbo}yku, Qamkuna ${verbo}nkichik, Paykuna ${verbo}nku`;
}
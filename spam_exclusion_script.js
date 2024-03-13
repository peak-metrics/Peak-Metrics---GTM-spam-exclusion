// Assicurati che window.dataLayer sia un array vuoto se non è già definito
window.dataLayer = window.dataLayer || [];

// Funzione per leggere il contenuto del file TXT
function leggiFileTXT(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      callback(xhr.responseText);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

// Funzione per creare un datalayer push con il contenuto del file TXT
function creaDatalayerPush(contenuto) {
  // Crea un oggetto datalayer
  var datalayer = {};

  // Imposta la chiave 'spam_referrer_list' come una stringa
  datalayer["spam_referrer_list"] = contenuto.trim();

  // Aggiungi la chiave 'event' impostata su "spam_list_init"
  datalayer["event"] = "spam_list_init";

  // Push del datalayer
  window.dataLayer.push(datalayer);
}

// Sostituisci 'percorso_del_tuo_file.txt' con il percorso del tuo file TXT
var fileURL = "https://www.peakmetrics.net/risorse/spam_referrer_list.txt";

// Leggi il file TXT e crea il datalayer push
leggiFileTXT(fileURL, creaDatalayerPush);

# Angular Authentication & User Access System (Verifica)

Sistema di gestione accessi sviluppato con **Angular (v17+)**, che implementa flussi di lavoro completi per il login degli utenti e la registrazione di nuovi account tramite REST API.

## Descrizione
L'applicazione fornisce un'interfaccia dinamica per l'autenticazione. Utilizza componenti standalone per gestire separatamente il modulo di Login e quello di Registrazione, scambiando dati con un backend tramite chiamate POST asincrone. Il sistema include la gestione degli stati di successo/errore e il controllo degli header HTTP per la trasmissione corretta di dati in formato JSON.



## Funzionamento del Sistema:
* **Conditional Rendering (`*ngIf`)**: Gestione fluida della UI per mostrare o nascondere i moduli di login e registrazione senza ricaricare la pagina, migliorando l'esperienza utente (SPA).
* **Template-Driven Forms**: Utilizzo della direttiva `ngModel` e dei riferimenti di template (`#myForm="ngForm"`) per catturare e validare i dati inseriti dall'utente.
* **Authentication Service**: Implementazione di `AccessService` per centralizzare le chiamate verso gli endpoint `/login` e `/register`.
* **HTTP Header Management**: Configurazione esplicita degli `HttpHeaders` per definire il `Content-Type: application/json`, garantendo la compatibilità con il backend (Spring Boot/Node.js).
* **Feedback System**: Implementazione di logiche booleane (`showSuccess`, `showError`) per notificare all'utente l'esito dell'operazione di accesso in base alla risposta del server.
* **Payload Construction**: Generazione dinamica di stringhe JSON per il trasferimento sicuro di username, password, email e dettagli anagrafici.

## Tecnologie e Concetti
* **Angular v17+**: Architettura moderna basata su componenti standalone e configurazione centralizzata tramite `app.config`.
* **HttpClient POST**: Utilizzo del metodo POST per inviare dati sensibili nel corpo della richiesta invece che nei parametri URL.
* **Component Nesting**: Integrazione del componente `Register` all'interno del flusso di `Login` tramite selettori personalizzati.
* **Dependency Injection**: Iniezione del servizio di accesso per mantenere i componenti "snelli" e focalizzati sulla presentazione.

## Endpoints Gestiti
| Funzione | Metodo | Endpoint | Dati Inviati |
| :--- | :--- | :--- | :--- |
| **Login** | `POST` | `/login` | Username, Password |
| **Registrazione** | `POST` | `/register` | Username, Password, Email, Name, Surname |

---
*Progetto focalizzato sulla sicurezza applicativa e sulla gestione professionale del flusso dati tra frontend e backend.*

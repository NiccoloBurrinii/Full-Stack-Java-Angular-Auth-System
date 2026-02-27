# Full-Stack User Authentication System

Sistema completo di gestione utenze che integra un frontend dinamico in **Angular 17+** e un backend robusto in **Spring Boot 3.x** con persistenza dati su database **H2**.

## Descrizione
Questo progetto rappresenta un'architettura Full-Stack completa. Il sistema permette agli utenti di registrarsi e autenticarsi attraverso un'interfaccia reattiva. I dati fluiscono dal frontend Angular (tramite servizi HTTP) al backend Java, dove vengono validati e memorizzati permanentemente. È un esempio concreto di separazione tra client e server comunicanti tramite standard REST.



## Architettura del Sistema

### 🟢 Frontend (Angular)
* **Modularità**: Utilizzo di Standalone Components per Login e Registrazione.
* **Access Service**: Gestore centralizzato delle chiamate HTTP con configurazione degli Header (`application/json`).
* **State Management**: Gestione dinamica della UI con `*ngIf` per alternare i moduli e mostrare feedback di successo o errore.
* **Data Flow**: Cattura dei dati tramite Template-Driven Forms e invio tramite metodo POST.

### 🔵 Backend (Spring Boot)
* **REST Controllers**: Endpoint dedicati (`/login` e `/register`) per processare le richieste del client.
* **JPA Persistence**: Mappatura della classe `Persona` su database relazionale tramite Hibernate.
* **H2 Database**: Motore database in-memory per una gestione rapida e sicura delle utenze durante lo sviluppo.
* **Business Logic**: Validazione delle credenziali e salvataggio dei nuovi profili con generazione automatica delle chiavi primarie.

## Flusso di Comunicazione
1. L'utente inserisce i dati nel form Angular.
2. Il **Service** Angular invia una richiesta `POST` al server sulla porta `6789`.
3. Il **Controller** Spring riceve il JSON e lo converte in un oggetto Java (`@RequestBody`).
4. Il **Repository** interagisce con il DB H2 per verificare o salvare i dati.
5. Il server risponde con un feedback (`valid: true/false` o l'oggetto creato).
6. Il frontend reagisce visualizzando il messaggio appropriato.



## Tecnologie Utilizzate
* **Frontend**: Angular 17, TypeScript, HTML5/CSS3.
* **Backend**: Java 17+, Spring Boot, Spring Data JPA.
* **Database**: H2 (In-memory).
* **Protocollo**: HTTP / REST.

---
*Progetto integrato sviluppato per padroneggiare lo sviluppo di applicazioni web moderne end-to-end.*

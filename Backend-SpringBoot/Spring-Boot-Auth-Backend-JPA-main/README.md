# Spring Boot Authentication Backend (JPA & H2) (VerificaBACKEND)

Sviluppo dello strato di persistenza e dei servizi REST per la gestione delle utenze, integrato con **Spring Data JPA** e database in-memory **H2**.

## Descrizione
Il backend fornisce le API critiche per supportare il frontend Angular nei processi di Login e Registrazione. Utilizzando il pattern Repository, il sistema automatizza la creazione delle tabelle SQL a partire dalla classe `Persona`. Gestisce payload JSON in ingresso per convalidare le credenziali o salvare permanentemente nuovi profili utente completi di anagrafica, email e password.



## Funzionamento del Sistema:
* **User Registration Service**: Implementazione dell'endpoint `/register` che riceve un oggetto `Persona` e lo persiste nel database tramite il metodo `save()`, gestendo automaticamente la generazione degli ID univoci.
* **Authentication Logic**: Endpoint `/login` progettato per restituire una risposta JSON strutturata (`valid: true/false`). Questo permette al frontend di decidere se concedere l'accesso all'area riservata.
* **JPA Entity Mapping**: Definizione del modello dati con annotazioni `@Entity` e `@Id`, mappando proprietà come username, password ed email su colonne del database relazionale.
* **Automated Data Access**: Utilizzo di `JpaRepository` per ereditare i metodi standard di manipolazione dati senza dover scrivere query SQL manuali.
* **Database Configuration**: Configurazione tramite `application.properties` per utilizzare un database **H2** in memoria, ideale per lo sviluppo e il test rapido, con console di gestione attiva sulla porta 6789.

## Tecnologie e Concetti
* **Spring Boot 3.x**: Framework per la creazione di microservizi Java.
* **Spring Data JPA**: Abilitazione dell'Object-Relational Mapping (ORM).
* **H2 In-Memory DB**: Storage volatile per la gestione dei test e delle sessioni di sviluppo.
* **JSON Serialization**: Produzione di stringhe JSON manuali e automatiche per la comunicazione con il client.

## API Endpoints
| Verbo | Path | Input (JSON Body) | Output / Risposta |
| :--- | :--- | :--- | :--- |
| **POST** | `/register` | Oggetto Persona completo | Oggetto salvato con ID |
| **POST** | `/login` | Username e Password | `{'valid': 'true/false'}` |

---
*Progetto focalizzato sulla creazione di un backend sicuro e scalabile per la gestione degli accessi utente.*

# L’utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

- recuperare dal DOM la griglia
- recuperare dal DOM il bottone tramite un id
- assegnare un evento al bottone
    - quando viene attivato l'evento cancellare resettare gli elementi presenti
    - questo evento tramite un ciclo (PER) che andra da 0 a 99,servira per creare i 100 elementi cell da inserire nella griglia a cui daremo un numero da 1 a 100 (i + 1)
    - recuperare questi elementi dal DOM 
    - aggiungere un evento CLICK che aggiungera all elemento corrispondende la classe (bg-lightblue) e quindi gli fara cambiare colore al click e stampera in console l'elemento


## select 
- creare le select
- Se la select selezionata è "facile"
    - eseguire il codice già scritto che generera le casella da 10 x 10
- ALTRIMENTI SE la select selezionata è "normale"
    - generare un altro codice con valori diversi del ciclo(i) e classi differenti(per gestire lo spazio occupato)
- ALTRIMENTI SE  la select selezionata è "difficile"
    - generare un altro codice con valori diversi del ciclo(i) e classi differenti(per gestire lo spazio occupato)

## Array di numeri che poi saranno le bombe
- copiamo la funzione per generare un numero random
- creamo una funzione a cui possiamo assegnare tre valori: i primi due per il range tra cui puo trovare i numeri e il terzo il numero di elementi di cui deve essere composto questo array di numeri
    - creamo un array vuoto
    - attraverso un ciclo WHILE/FINCHE  aggiungiamo numeri finche non ne abbiamo 16 
        - ogni numero che viene generato viene aggiunto all'array
        - SE il numero genrato e gia stato generato non lo aggiungiamo all'array
        

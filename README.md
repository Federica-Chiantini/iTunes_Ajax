🇮🇹 ITALIAN: Sito per la ricerca di canzoni su iTunes.

📄 HTML: Sito single-page con un semplice titolo e due input (uno di tipo text e uno di tipo number) per inserire il nome del cantante/gruppo e il numero di canzoni da mostrare. La tabella verra' poi inserita con Javascript.

✏️ CSS: Sito realizzato con colorazione azzurro/violacea anche nella colorazione del background e nella tabella, con effetto della pseudoclasse hover che illumina la casella dove viene passato il cursore del mouse. Il sito si presenta con misure in pixel perche' mi sono voluta concentrare sulla chiamata al server e sull'implementazione dei dati nell'html che sul rendere il sito responsive, si adatta meglio per schermi del pc/schermi grandi.

💻JAVASCRIPT: La funzione CercaBrani esegue la ricerca: ho messo come prima cosa un controllo con un alert che scatta nel caso in cui vengano commessi degli errori o che venga inviato un campo vuoto (trim() elimina eventuali errori di spazi prima e dopo la fine del testo inserito nell'input). Se non ci sono errori con fetch viene fatta la chiamata al server itunes che torna una promise con i casi then e catch per catturare i dati o l'eventuale errore nella chiamata. I dati generati, i valori degli input del nome e del numero di brani vengono messi nei parametri che si trovano dentro la funzione GeneraHTML che viene richiamata in questo momento e crea la struttura html della tabella usando questi dati. Infine, la funzione ProssimiBrani e' collegata al click del bottone successivi che fa un ulteriore chiamata sui prossimi brani in lista, sostituendoli ai quelli precedenti.

![show the homepage](/itunes.png)

🇬🇧 ENGLISH: Webpage for finding songs on the iTunes server.

📄 HTML: Single-page website with a title and two inputs (type=text and type=number) to digit the name of the singer/band and the number of songs to show. The table with the result of the research will then be added by Javascript code.

✏️ CSS: It is made with a design of light blue/purple colors, that i have used also in the background color and for the table. I added the effect of the hover pseudoclass, which highlighted the box where the cursor is. The page is presented with pixel measurements because I wanted to focus on the server call and on the implementation of the data in the HTML rather than on making the site responsive. It is suited for PC screens/large screens.

💻JAVASCRIPT: The CercaBrani function performs the research: first it checks if there are errors or empty space, so it will raise an alert that is triggered to remind the user to digit the input correctly(.trim() eliminates any space errors before and after the end of the text inside the input). If there are no errors the fetch make the call to the iTunes server which returns a promise with the then and catch cases to capture the data or any error in it. The generated data, the inputs value of the name and number of songs are placed in the parameters found inside the GeneraHTML function which is called at this moment. This function makes the html structure of the table using these datas. Finally, the ProssimiBrani function is called with thee click of the successivi button which makes a further call to the next songs in the list, replacing them with the previous ones.

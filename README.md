NoteWebApp

Aplikacja webowa do tworzenia i zarządzania notatkami.

📝 Opis

NoteWebApp to aplikacja webowa umożliwiająca użytkownikom tworzenie, edytowanie i usuwanie notatek. Projekt ma na celu zapewnienie prostego i intuicyjnego interfejsu do zarządzania notatkami online.

🚀 Funkcje

Tworzenie nowych notatek

Edytowanie istniejących notatek

Usuwanie notatek

Przechowywanie notatek w lokalnej bazie danych

🛠️ Technologie

Frontend: JavaScript, HTML, CSS

Backend: Java

Baza danych: h2

📦 Instalacja
1. Klonowanie repozytorium
git clone https://github.com/kubastra/NoteWebApp.git
cd NoteWebApp

2. Instalacja zależności
# Dla frontend
cd notewebapp-frontend
npm install

# Dla backend
cd ../notewebapp-backend
mvn install

3. Uruchomienie aplikacji
# Uruchomienie backendu
cd notewebapp-backend
mvn spring-boot:run

# Uruchomienie frontend
cd ../notewebapp-frontend
npm start

📄 Użycie

Po uruchomieniu aplikacji frontend będzie dostępny pod adresem http://localhost:3000, a backend pod adresem http://localhost:8080. Możesz teraz tworzyć, edytować i usuwać notatki za pomocą interfejsu webowego.

🧪 Testowanie

Testy jednostkowe dla backendu:

cd notewebapp-backend
mvn test

Testy frontendowe:

cd notewebapp-frontend
npm test

📄 Licencja

Ten projekt jest licencjonowany na warunkach licencji MIT. Szczegóły znajdują się w pliku LICENSE
.

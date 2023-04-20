# Projekt React - budowanie niezależnych komponentów

## Zanim zaczniesz
1. Upewnij się czy masz zainstalownego `node`
2. Zrób checkout na swój branch `git checkout -b project-1/<imie-nazwisko>`
3. Zainstaluj wszystkie paczki. Użyj `npm i` w ścieżce `./jfddr9-project-react/Project 1`
4. Uruchom apkę przez `npm start`

## Zadanie 1:

1. w folderze `src/components` utwórz niezależne komponenty:

- `Header` - obsługujący parametr `title` oraz `logoSrc`
- `Sidebar`- obsługujący parametr `menuItems`
- `Content`
- `Footer` - obsługujący parametr `text`

2. zaimportuj utworzone komponenty do głównego komponentu aplikacji (`App.js`) i rozmieść według schematu:

```
 ______________________
|                      |
|       Header         |
|______________________|
|       |              |
|   S   |              |
|   i   |              |
|   d   |   Content    |
|   e   |              |
|   b   |              |
|   a   |              |
|   r   |              |
|_______|______________|
|                      |
|        Footer        |
|______________________|

```

## Zadanie 2:

- utwórz komponent `Users` oraz `User`, który wyświetli listę uzytkowników (nazwę oraz email) z pliku `users-data.js` z folderu `src/data` poprzez zaimportowanie jej w głównym komponencie aplikacji (`App`) i przekazanie do komponentu `Users`. Lista ma się wyświetlać wewnątrz `Content`.

## Zadanie 3

- zaimportuj do `App.js` listę itemów z pliku `src/data/menu-items.js`, a następnie przekaz ją w propsie do sidebara. W sidebarze wyświetl itemy jako listę linków, o nazwie z pola `name` i odnośniku z pola `link`

## Zadanie 4

- utwórz przełącznik: `dark theme/light theme` dla całej strony
- za pomocą `Styled components` ostyluj aplikację i reaguj odpowiednio na zmiany Theme.

## Zadanie 5

- dodaj do komponentu `User` przycisk `Delete` i napisz jego obsługę (po jego naciśnięciu z listy ma się usuwać dany User, po odświezeniu strony pojawi się ponownie). Jeśli usuniesz wszystkich userów, wyświetl w miejscu listy komunikat - "Users list empty!"

## Zadanie 6
- dodaj wyszukiwarkę userów (po `name`) - input powyżej listy użytkowników, za pomocą którego będzie można wyfiltrować użytkowników, których `name` zawiera wpisaną frazę. Po skasowaniu frazy, lista ma wrócić do pierwotnego stanu. Przyda się useState i useEffect. Jeżeli wyszukiwarka nie znajdzie żadnego usera, wyświetl w miejscu listy komunikat - "Users list empty!"

## Zadanie 7:

1. Utwórz komponenty `Home` oraz `Login`. W komponencie `Home` umieść to udało Ci się stworzyc do tej pory w pliku `App.js`, a w komponencie `Login` stwórz formularz do podania `login` oraz `password`.

2. W komponencie `App.js` utwórz Routes - adres `/home` ma wyświetlać komponent `Home`, a adres `/login` - komponent `Login`.

3. Utwórz plik `Auth.js` w katalogu `src/providers` i stwórz w nim `Context Provider`, który ma posiadać dwie wartości - `isLogged` oraz `setIsLogged`.

4. Sprawdzaj parametr `isLogged` w `App.js`. Jezeli uzytkownik jest zalogowany - przekieruj go na `/home`, jeśli nie - na `/login`. Zrób to samo w komponentach `Home` i `Login` - sprawdzaj, czy uzytkownik jest zalogowany.

5. Komponent `Login` po wpisaniu nazwy uzytkownika i hasła ma tworzyć w localStorage pole `user` z loginem uzytkownika jako value i przestawiać `isLogged` na `true`. `Auth.js` ma sprawdzać w `useEffect` czy istnieje takie pole w localStorage i jeśli istnieje - ustawiać `isLogged` na `true`.

6. Po zalogowaniu uzytkownika ma się odbyć przekierowanie na `/home`.

7. W headerze dodaj przycisk `Log out`, ktory spowoduje przestawienie `isLogged` na `false`, wyczyszczenie localStorage i przekierowanie na `/login`.

## Zadanie 8:

1. Jeżeli nie udało Ci się zaimplentować zadania 5 to możesz to zrobić bezpośrednio na reduxie w tym zadaniu
2. Przenies logikę odpowiedzialna za wyswietlanie userow do redux store
3. Dodaj reducer na usuwanie userow z redux store
4. Dodaj filtrowanie userów do reduxa

## Zadanie 9

1. Stwórz komponent odpowiedzialny za wyświetlanie profilu danego usera. Komponent musi wyświetlać informacje o nazwie użytkownika oraz jego adresie zamieszkania. (Tu możesz użyć dummy data, których stuktura bedzie odpowiadala strukturze uzytownika z pliku `users-data.js``)
2. W routingu dodaj adres `/user/:id` do którego dołączysz komponent, który zrobiles w pierwszym podpunkcie
3. Spraw by komponent z punktu pierwszego pobrał `id` z urla, a następnie zastąp dummy data usera z userem w trzymanym reduxie

## Zadanie 10

1. Stwórz komponent w którym umieścisz formualrz do tworzenia nowego użytkownika
2. Komponent umieść w nowym route'cie pod adresem `/user/add`
3. Wymagane jest stworzenie prostej walidacji przynajmniej do 2 pól (`username` oraz `name`)
4. Pole `id` nadaj randomowo
5. Nowego użytkownika dodawaj do redux store na submit przycisku `Dodaj wpis`

## Zadania 11
1. Stwórz nowy kontekst na potrzeby formularz z poprzedniego zadania
2. Kontekst powinien udostępninać setState'y dla każdego pola w formularzu oraz funkcje na `onSubmit`, która doda nowego użytkownika do reduxa
3. Jeżeli nie zrobiłeś tego wcześniej przenieś logikę walidacji do osobnego pliku


## Zadanie 12 
1. Jeżeli nie zaimplementowales zadania 4 możesz to zrobić w tym zadaniu
2. Logikę odpowiedzialną za theme wydziel do nowego kontekstu 

## Zadanie 13*
1. Na bazie formularza z zadania 10 dodaj do aplikacji możliwość edytowania użytkownika
2. Dodaj nowy routing pod adresem `/user/edit/:id`
3. Dodaj akcje na profilu użytkownika (zadanie 9), która przeniesie nas do formulrza
4. Pola formularza edycji muszą być uzupełnione danymi danego użytkownika
5. Po kliknięciu przycisku `Edytuj dane` dany użytkownik ma miec zmienione dane na te w formularzu

Za każdy z podpunktów (zadania 7 - 12) po jednym punkcie bez zadania 13, które jest dla chętnych. W sumie jest ich 24 (baza). Ogólnie praca domowa do 1/05 ale nie pózniej niż do 09/05


# Po zajęciach
1. Zrób commita ze swoimi zmianami `git add .` => `git commit -m "My changes"` => `git push`
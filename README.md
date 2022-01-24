# book-world
Jest to księgarnia internetowa zbudowana aby zademonstrować moją znajomość React, React-Redux, React-Saga oraz CSS, SCSS

Możesz przetestować stronę bez pobierania, jest hostowana na mojej domenie: https://www.bookworld.staniszewski.contact/
## Wykorzystane technologie
- HTML
- CSS
- Sass
- JavaScript
- React
- React Redux
- React-Saga
- Firebase
- Stripe
- Git
- GitHub
## Funkcjonalności:
**1. Logowanie przez google lub email/hasło**

![logowanie](https://i.ibb.co/Rhf1hLP/Screen-Shot-2022-01-24-at-20-36-50-PM.png)

Linki do plików na githubie zawierających kod dotyczący logowania użytkownika

- [Sign In component](https://github.com/LukaszStaniszewski/book-world/blob/master/src/pages/sign-in/sign-in-page.component.jsx)

- [Redux, redux-saga - asynchroniczne funkcje, zapisywanie danych o obecnie zalogowanym użytkowniku w aplikacji](https://github.com/LukaszStaniszewski/book-world/tree/master/src/redux/user)

- [Firebase - tworzenie profilu użytkownika, sprawdzanie czy sesja jest otwarta/zamknięta aby stworzyć session persistance czyli automatyczne logowanie użytkownika po odświeżeniu strony, jeżeli ten się nie wylogował](https://github.com/LukaszStaniszewski/book-world/blob/master/src/firebase/firebase.utils.js)

**2. Wyświetlanie przedmiotów do sprzedaży w danej kategorii**

![](https://i.ibb.co/5hjSVgW/Screen-Shot-2022-01-24-at-20-35-10-PM.png)

- [Item frame - komponent określający jak wyglądają przedmioty wystawione na sprzedaż, wykorzystanie redux aby dynamicznie przekazywać dane o przedmiotach z state](https://github.com/LukaszStaniszewski/book-world/blob/master/src/components/item-frame/item-frame.component.jsx)

- [Akcje, reducer oraz sagi pobierające kolekcje z przedmiotami z bazy danych](https://github.com/LukaszStaniszewski/book-world/tree/master/src/redux/category)

**3. Podsumowanie zamówienia, dokonanie płatności**
![](https://i.ibb.co/2PrjqnJ/Screen-Shot-2022-01-24-at-20-37-21-PM.png)

- [Komponent strukturyzujący wygląd podstrony](https://github.com/LukaszStaniszewski/book-world/tree/master/src/pages/payment-page)

- [Akcje, reducer umożliwiające dodawanie, usuwanie przedmiotów do koszyka](https://github.com/LukaszStaniszewski/book-world/tree/master/src/redux/cart)


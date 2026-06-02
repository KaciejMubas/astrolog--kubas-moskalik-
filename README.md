# 🌌 AstroLog - Katalog Ciał Niebieskich

Witajcie w projekcie **AstroLog**! Waszym zadaniem jest stworzenie interaktywnego panelu dla Głównego Obserwatorium Astronomicznego. 
Aplikacja posłuży do przeglądania znanych ciał niebieskich oraz rejestrowania nowych odkryć.

---

## 🚀 Jak zacząć pracę w parze?

1. **JEDNA OSOBA z pary:** Klika zielony przycisk **"Use this template"** -> **"Create a new repository"**.
2. Nazywa repozytorium zgodnie ze wzorem: `astrolog-[nazwisko-nazwisko]`.
3. Po utworzeniu repozytorium wchodzi w zakładkę **Settings -> Collaborators** i zaprasza osobę z pary.
4. Obydwie osoby klonują repozytorium na swoje komputery:
   ```bash
   git clone <link_do_waszego_repozytorium>
   ```
5. Wejdźcie do folderu z projektem i zainstalujcie zależności:
   ```bash
   npm install
   ```
6. Uruchomcie projekt:
   ```bash
   npm start 
   # LUB (jeśli używacie Vite)
   npm run dev
   ```

---

## 🛠️ Cykl Pracy (SDLC) - ZASADY

Zanim napiszecie pierwszą linijkę kodu, zaplanujcie pracę! Programowanie bez planu to planowanie porażki.

1. **Kanban:** Załóżcie tablicę w zakładce `Projects` na GitHubie i zaplanujcie zadania (To Do, In Progress, Done). Pamiętajcie o rozrysowaniu drzewa komponentów!
2. **Gałęzie (Branches):** **NIE PRACUJEMY BEZPOŚREDNIO NA GAŁĘZI `main`!**
   Każda nowa funkcja to nowa gałąź (nie kasujecie gałęzi).
   ```bash
   git checkout -b feature/lista-obiektow
   # lub
   git checkout -b feature/formularz-dodawania
   ```
3. **Pull Request (PR):** Gdy skończycie zadanie, wypychacie gałąź na GitHuba (`git push origin nazwa-galezi`) i tworzycie Pull Request. Druga osoba z pary robi Code Review i zatwierdza połączenie z gałęzią `main`.

---

## ✅ Wymagania Projektowe 

Aby projekt został zaliczony, musi spełniać poniższe kryteria techniczne:

- [ ] **Komponenty:** Podział aplikacji na minimum 4 logiczne komponenty (np. `App`, `CatalogList`, `ObjectDetails`, `DiscoveryForm`).
- [ ] **Stan (`useState`):** Przechowywanie w stanie: głównej tablicy obiektów, aktualnie wybranego obiektu do podglądu oraz danych z formularza (kontrolowane inputy).
- [ ] **Przekazywanie Danych (Props):** Prawidłowa komunikacja między komponentami. Formularz musi potrafić wysłać dane w górę do rodzica!
- [ ] **Renderowanie List:** Użycie metody `.map()` do wyświetlenia listy planet/gwiazd. Wymagany atrybut `key`.
- [ ] **Renderowanie Warunkowe:** Użycie operatorów `&&` lub `? :` do wyświetlania panelu szczegółów (lub komunikatu "Wybierz obiekt", jeśli nic nie kliknięto).
- [ ] **Niemutowalność Stanu:** Prawidłowe dodawanie nowych elementów do tablicy z użyciem operatora *spread* (`...`). Brak bezpośredniej mutacji (zakaz używania `.push()`).

---

## 📂 Sugerowana Struktura (Drzewo Komponentów)

Jeśli macie problem z zaplanowaniem architektury, rozważcie taki podział:

```text
App (Trzyma główny stan: tablicę obiektów i wybrany obiekt)
 ├── CatalogList (Wyświetla listę. Otrzymuje tablicę i funkcję zmieniającą wybrany obiekt)
 ├── ObjectDetails (Otrzymuje wybrany obiekt. Renderuje go warunkowo)
 └── DiscoveryForm (Posiada lokalne stany dla inputów. Otrzymuje funkcję dodającą do tablicy)
```

**Powodzenia! Czystego nieba i kodu wolnego od bugów! 🔭✨**


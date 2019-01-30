import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="col-10 mx-auto col-md-8 mt-4 content">
                <h5 className="todo-title text-center">"Personal assistant" APP</h5>
                <p className="text-center">autor: Marcin Krupa</p>
                <h6 className="text-center"><strong>Wykorzystano: JavaScript, React.js, react-router, 
                    HTML, CSS, Bootstrap, RWD, JSON, npm</strong></h6>
                    <br/>
                <h6 className="text-center"><strong>Opis aplikacji</strong></h6>
                <p>Aplikacja Personal Assistant App to nowoczesny notatnik online. Pozwala użytkownikowi 
                   na pełną kontrolę nad jego prywatnymi sprawami. Mowa tutaj o:</p>
                <ul>
                    <li>Ratach, kredytach, comiesięcznych rachunkach - lista płatności</li>
                    <li>Rzeczach o których nie możemy zapomnieć: spotkanie, konferencja, webinar - lista zadań</li>
                </ul>
                <p>Dodatkową funkcją jest kalkulator, na którym możemy szybko podliczyć nasze zaległości - lista zaległości.</p>
                <h6 className="text-center"><strong>Korzystanie z aplikacji</strong></h6>
                <p>Funkcjonowanie i obsługa aplikacji są bardzo proste. W "liście płatności" wprowadzamy dwie dane: 
                    nazwę i kwotę płatności. Dodajemy płatność do listy za pomocą buttona "Dodaj płatność". Po uzupełnieniu
                    własnej listy płatności, otrzymujemy kompletny wykaz naszych wszystkich opłat.
                </p>
                <p>W "liście zadań" wprowadzamy wszystkie rzeczy do zrobienia, dzisiaj, jutro czy do końca miesiąca.
                    Po wpisaniu nazwy zadania, dodajemy element do listy za pomocą buttona "Dodaj zadanie". 
                    Element z listy po dodaniu możemy również edytować lub usuwać. 
                    Obydwie akcje za pomocą ikonek: edit i trash. 
                </p>
            </div>           
        )
    }
}

export default Home;
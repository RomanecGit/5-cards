import '../css/App.css';
import Card from './Card.jsx';
import shortid from 'shortid';

function App() {
const cards = [
    {
        title: "Карточка с img в html",
        text: "На картинке нарисован буржуйский тапок. Изображение выводится с расчетом на какие-то сложности - редактор изображений или что-то такое. Любые другие child выводятся как есть",
        //children: <img src="/img/1.jpg" className="card-img-top" alt="alt"/>
    },
    {
        title: "Карточка без img",
        text: "Сейчас 4 утра, но я хочу все знать и заодно получить зачет, потому рисую карточки",
        //children: <img src="/img/1.jpg" className="card-img-top" alt="alt"/>
    },
    {
        title: "Карточка c img в объекте",
        text: "img-children лежит в объекте и тоже работает",
        children: <img src="/img/1.jpg" className="card-img-top" alt="alt"/>
    },
    {
        text: "Карточка без заголовка, пустой <h1> не выводится",
        children: <img src="/img/1.jpg" className="card-img-top" alt="alt"/>
    },
    {
        title: "Карточка без текста, пустой <p> не выводится",
        children: <img src="/img/1.jpg" className="card-img-top" alt="alt"/>
    },
];

    return (
        <div className="App">

            {/*такой вариант тоже работает*/}
            {/*{*/}
            {/*    cards.map((card) =>*/}
            {/*        <Card key={shortid.generate()} {...card}/>*/}
            {/*    )*/}
            {/*}*/}

            {/*Разные варианты вывода - children и в данных и в html*/}
            <Card key={shortid.generate()} {...cards[0]}>
                <img src="/img/1.jpg" className="card-img-top" alt="alt"/>
                <p>Второй child, выводится как есть, без imgEditor</p>
            </Card>
            <Card key={shortid.generate()} {...cards[1]}/>
            <Card key={shortid.generate()} {...cards[2]}/>
            <Card key={shortid.generate()} {...cards[3]}/>
            <Card key={shortid.generate()} {...cards[4]}/>
        </div>
    )
}

export default App

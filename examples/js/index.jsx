/*global require*/
var React = require('react'),
    Slidable = require('../../lib/slidable.js'),
    Slide = React.createFactory(require('./slide.jsx')),

    dataSlides = [
        {
            id: 1,
            title: "As human beings, ...",
            text: "when we encounter a challenge, we have freedom to choose how to react.",
            image: 'images/forest-orange.png'
        },
        {
            id: 2,
            title: "Every decision ...",
            text: "that we make leads us down a different road.",
            image: "images/forest-green.png"
        },
        {
            id: 3,
            title: "Every decision ...",
            text: "that we make has significance.",
            image: 'images/forest-red.png'},
        {
            id: 4,
            title: "The tiniest choice ...",
            text: "that we make reverberates throughout the entire univers.",
            image: 'images/forest-blue.png'
        }
    ];

var slides = dataSlides.map(function(n) {
    n.key = 'slide-' + n.id;
    return Slide(n);
});

React.render(
    <div>
            <h2>Single item</h2>
            <Slidable className="slidable--single">
                {slides}
            </Slidable>

            <h2>Multiple Items</h2>
            <p className="todo">TODO</p>
            {/* <Slidable className="slidable--multiple"
                slidesToShow={3} slidesToScroll={3}>
                {slides}
                </Slidable> */}

                <h2>Autoplay</h2>
                <p className="todo">TODO</p>
                {/* <Slidable className="slidable--autoplay"
                    slidesToShow={3} slidesToScroll={1}
                    autoplay={true} autoplaySpeed={2000}>
                    {slides}
                    </Slidable> */}

                    <h2>Custom transition</h2>
                    <p className="todo">TODO</p>
                    {/* <Slidable className="slidable--custom-transition">
                        {slides}
                        </Slidable> */}

                        <h2>Callback subscribtion</h2>
                        <p className="todo">TODO</p>
                        {/* <Slidable className="slidable--custom-callback">
                            {slides}
                            </Slidable> */}
    </div>,

    document.getElementsByClassName('content')[0]
);

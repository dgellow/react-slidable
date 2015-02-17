/*global afterEach,beforeEach,describe,expect,it,jest,pit,require,xdescribe,xit*/
jest.dontMock('../src/slidable.jsx');

describe('Slidable', function() {
    beforeEach(function() {
        var React = require('react/addons'),
            Slidable = require('../src/slidable.jsx');

        this.utils = React.addons.TestUtils;

        // Render a Slidable in the document
        this.slidable = this.utils.renderIntoDocument(
            <Slidable>
                <div>First slide</div>
                <div>Second slide</div>
                <div>Third slide</div>
                <div>Fourth slide</div>
            </Slidable>
        );
    });

    it('increases current slide state after click on next', function() {
        // Initial state should be 0
        expect(this.slidable.state.current).toEqual(0);

        // Click on next
        var next = this.utils.findRenderedDOMComponentWithClass(
            this.slidable, 'slidable__right'
        );
        var nextAnchor = this.utils.findRenderedDOMComponentWithTag(
            next, 'a'
        );

        this.utils.Simulate.click(nextAnchor);
        expect(this.slidable.state.current).toEqual(1);

        this.utils.Simulate.click(nextAnchor);
        expect(this.slidable.state.current).toEqual(2);

        this.utils.Simulate.click(nextAnchor);
        expect(this.slidable.state.current).toEqual(3);
    });

    it('decreases current slide state after click on previous', function() {
        // Initial state should be 0
        expect(this.slidable.state.current).toEqual(0);

        // Click three times on next
        var next = this.utils.findRenderedDOMComponentWithClass(
            this.slidable, 'slidable__right'
        );
        var nextAnchor = this.utils.findRenderedDOMComponentWithTag(
            next, 'a'
        );
        [1, 2, 3].forEach(function() {
            this.utils.Simulate.click(nextAnchor);
        }, this);
        expect(this.slidable.state.current).toEqual(3);

        // Click on previous
        var previous = this.utils.findRenderedDOMComponentWithClass(
            this.slidable, 'slidable__left'
        );
        var previousAnchor = this.utils.findRenderedDOMComponentWithTag(
            previous, 'a'
        );

        this.utils.Simulate.click(previousAnchor);
        expect(this.slidable.state.current).toEqual(2);

        this.utils.Simulate.click(previousAnchor);
        expect(this.slidable.state.current).toEqual(1);

        this.utils.Simulate.click(previousAnchor);
        expect(this.slidable.state.current).toEqual(0);
    });

    it('sets current slide state to number of children - 1 after click on previous when current slide state === 0', function() {
        // Initial state should be 0
        expect(this.slidable.state.current).toEqual(0);


        var next = this.utils.findRenderedDOMComponentWithClass(
            this.slidable, 'slidable__right'
        );
        var nextAnchor = this.utils.findRenderedDOMComponentWithTag(
            next, 'a'
        );

        // Click three time on next to select the last slide
        [1, 2, 3].forEach(function() {
            this.utils.Simulate.click(nextAnchor);
        }, this);
        expect(this.slidable.state.current).toEqual(3);

        // Click a last time on next
        this.utils.Simulate.click(nextAnchor);
        expect(this.slidable.state.current).toEqual(0);
    });

    it('sets current slide state to 0 after click on previous when current slide state === number of children - 1', function() {
        // Initial state should be 0
        expect(this.slidable.state.current).toEqual(0);

        // Click on previous
        var previous = this.utils.findRenderedDOMComponentWithClass(
            this.slidable, 'slidable__left'
        );
        var previousAnchor = this.utils.findRenderedDOMComponentWithTag(
            previous, 'a'
        );
        this.utils.Simulate.click(previousAnchor);
        expect(this.slidable.state.current).toEqual(3);
    });
});

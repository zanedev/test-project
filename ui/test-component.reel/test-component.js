/**
 * @module ui/test-component.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class TestComponent
 * @extends Component
 */
exports.TestComponent = Component.specialize(/** @lends TestComponent# */ {
    constructor: {
        value: function TestComponent() {
            this.super();
        }
    }
});

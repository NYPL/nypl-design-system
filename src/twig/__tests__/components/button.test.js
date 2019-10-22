const { describe } = require('mocha');
const { expect } = require('chai');
const testRenderer = require('../twig-renderer');

const buttonPath = './_patterns/01-atoms/buttons/_button.twig'

describe('Settings', () => {
    it('Renders custom text', async () => {
        var results = await testRenderer.render(buttonPath, {
          button_content: 'This is a button',
        });
        expect(results.ok).to.equal(true);
        expect(results.html).to.contain("This is a button");
      });

      it("optionally sets a className", async () => {
        var results = await testRenderer.render(buttonPath);
        expect(results.ok).to.equal(true);
        expect(results.html).to.contain("class=\"button\"");

        results = await testRenderer.render(buttonPath, {
          button_content: "aaaa",
          button_modifiers: 'custom_class',
          button_url: "aaa",
        });
        console.log("results", results);
        expect(results.ok).to.equal(true);
        expect(results.html).to.contain("class=\"button\"");

      });

      // it("optionally disables", () => {
      //   expect(wrapper.find("[disabled=true]").length).to.equal(0);
      //   wrapper.setProps({ disabled: true });
      //   expect(wrapper.find("[disabled=true]").length).to.equal(1);
      // });
      // it("optionally sets a type", () => {
      //   expect(wrapper.prop("type")).to.equal("submit");
      //   wrapper.setProps({ type: "button" });
      //   expect(wrapper.prop("type")).to.equal("button");
      // });
      // it("optionally calls the callback on mouseDown instead of on click", () => {
      //   expect(callback.callCount).to.equal(0);
      //   wrapper.setProps({ mouseDown: true });
      //   wrapper.simulate("click");
      //   expect(callback.callCount).to.equal(0);
      //   wrapper.simulate("mouseDown");
      //   expect(callback.callCount).to.equal(1);
      // });
    
      // // Typically, any extra props are aria-attributes.
      // it("should render any extra props", () => {
      //   wrapper = Enzyme.shallow(
      //     <Button callback={callback} aria-pressed={true} aria-label="aria label" />
      //   );
      //   const buttonProps = wrapper.props();
      //   expect(buttonProps["aria-pressed"]).to.be.true;
      //   expect(buttonProps["aria-label"]).to.equal("aria label");
      // })
})
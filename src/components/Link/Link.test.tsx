import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import Link from "./Link";
import { LinkTypes } from "./LinkTypes";
import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
} from "react-router-dom";
import Icon from "../Icons/Icon";
import { IconRotationTypes, IconNames } from "../Icons/IconTypes";

describe("Link Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(
      <Link>
        <a href="#test">Test</a>
      </Link>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});

// describe("Link", () => {
//   let wrapper;

//   it("Can pass in icon, text as child and url as props", () => {
//     wrapper = render(
//       <Link href="#passed-in-link" type={LinkTypes.Action}>
//         <Icon
//           name={IconNames.download}
//           blockName="more-link"
//           modifiers={["left"]}
//           decorative={true}
//           iconRotation={IconRotationTypes.rotate0}
//         ></Icon>
//         Download
//       </Link>
//     );
//     expect(wrapper.find("a")).to.have.lengthOf(1);
//     expect(wrapper.find("Icon")).to.have.lengthOf(1);
//   });

//   it("Can pass a link with <a> tag", () => {
//     wrapper = render(
//       <Link>
//         <a href="#test">Test</a>
//       </Link>
//     );
//     expect(wrapper.find("a")).to.have.lengthOf(1);
//   });

//   it("Can pass a link with <a> tag and an icon", () => {
//     wrapper = render(
//       <Link type={LinkTypes.Action}>
//         <a href="#test2">
//           <Icon
//             name={IconNames.download}
//             blockName="more-link"
//             modifiers={["left"]}
//             decorative={true}
//             iconRotation={IconRotationTypes.rotate0}
//           ></Icon>
//           Test
//         </a>
//       </Link>
//     );
//     expect(wrapper.find("a")).to.have.lengthOf(1);
//     expect(wrapper.find("Icon")).to.have.lengthOf(1);
//   });

//   it("Generated back link has icon", () => {
//     wrapper = render(
//       <Link href="#passed-in-link" type={LinkTypes.Backwards}>
//         content
//       </Link>
//     );
//     expect(
//       wrapper.find(".more-link__icon").hasClass("more-link__icon--left")
//     ).toEqual(true);
//   });

//   it("Generated forwards link has icon", () => {
//     wrapper = render(
//       <Link href="#passed-in-link" type={LinkTypes.Forwards}>
//         content
//       </Link>
//     );
//     expect(
//       wrapper.find(".more-link__icon").hasClass("more-link__icon--right")
//     ).toEqual(true);
//   });

//   it("Can pass in text as child and url as props", () => {
//     wrapper = render(<Link href="#test">Test</Link>);
//     expect(wrapper.find("a")).to.have.lengthOf(1);
//   });

//   it("Can pass in a ReactRouter Link", () => {
//     wrapper = render(
//       <Router>
//         <Link type={LinkTypes.Action}>
//           <ReactRouterLink to="#">
//             <Icon
//               name={IconNames.download}
//               blockName="more-link"
//               modifiers={["left"]}
//               decorative={true}
//               iconRotation={IconRotationTypes.rotate0}
//             ></Icon>
//             Download
//           </ReactRouterLink>
//         </Link>
//       </Router>
//     );
//     expect(wrapper.find("a")).to.have.lengthOf(1);
//   });

//   it("throws an error if text is passed but no url is passed", () => {
//     expect(() => render(<Link>Test</Link>)).to.throw(
//       "Link needs prop 'href'"
//     );
//   });

//   it("throws an error if more than one child is passed", () => {
//     expect(() =>
//       render(
//         <Link>
//           <Icon
//             name={IconNames.download}
//             blockName="more-link"
//             modifiers={["left"]}
//             decorative={true}
//             iconRotation={IconRotationTypes.rotate0}
//           ></Icon>
//           <a href="#test">Test</a>
//         </Link>
//       )
//     ).to.throw("Please pass only one child into Link");
//   });

//   it("Passes the ref to the input element", () => {
//     const ref = React.createRef<HTMLAnchorElement>();
//     const container = render(
//       <Link href="/some-link" ref={ref}>
//         Go to page
//       </Link>
//     );
//     expect(container.find("a").instance()).toEqual(ref.current);
//   });
// });

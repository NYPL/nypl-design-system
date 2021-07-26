import * as React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";

import SkeletonLoader from "./SkeletonLoader";
import {
  SkeletonLoaderImageRatios,
  SkeletonLoaderLayouts,
} from "./SkeletonLoaderTypes";

describe("SkeletonLoader Accessibility", () => {
  it("passes axe accessibility test", async () => {
    const { container } = render(<SkeletonLoader />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

describe("SkeletonLoader", () => {
  let container;

  describe("layout", () => {
    it("renders default layout", () => {
      const utils = render(<SkeletonLoader />);
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(container.querySelector(".skeleton-loader")).toHaveAttribute(
        "class",
        "skeleton-loader skeleton-loader--vertical "
      );
      expect(container.querySelector(".skeleton-loader")).not.toHaveAttribute(
        "class",
        "skeleton-loader skeleton-loader--portrait "
      );
    });

    it("renders vertical layout", () => {
      const utils = render(
        <SkeletonLoader layout={SkeletonLoaderLayouts.Vertical} />
      );
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader--vertical")
      ).toBeInTheDocument();
    });

    it("renders horizontal layout", () => {
      const utils = render(
        <SkeletonLoader layout={SkeletonLoaderLayouts.Horizontal} />
      );
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader--horizontal")
      ).toBeInTheDocument();
    });
  });

  // describe("UI elements", () => {
  //   it("renders default elements", () => {
  //     container = render(<SkeletonLoader />);
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-image").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-heading").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-content").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-button").exists()).toEqual(
  //       false
  //     );
  //   });

  //   it("renders without image", () => {
  //     container = render(<SkeletonLoader showImage={false} />);
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-image").exists()).toEqual(false);
  //     expect(container.find(".skeleton-loader-heading").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-content").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-button").exists()).toEqual(
  //       false
  //     );
  //   });

  //   it("renders without heading", () => {
  //     container = render(<SkeletonLoader showHeading={false} />);
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-image").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-heading").exists()).toEqual(
  //       false
  //     );
  //     expect(container.find(".skeleton-loader-content").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-button").exists()).toEqual(
  //       false
  //     );
  //   });

  //   it("renders without content", () => {
  //     container = render(<SkeletonLoader showContent={false} />);
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-image").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-heading").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-content").exists()).toEqual(
  //       false
  //     );
  //     expect(container.find(".skeleton-loader-button").exists()).toEqual(
  //       false
  //     );
  //   });

  //   it("renders with button", () => {
  //     container = render(<SkeletonLoader showButton={true} />);
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-image").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader-heading").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-content").exists()).toEqual(
  //       true
  //     );
  //     expect(container.find(".skeleton-loader-button").exists()).toEqual(true);
  //   });

  //   it("renders with border", () => {
  //     container = render(<SkeletonLoader border />);
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(container.find(".skeleton-loader--border").exists()).toEqual(
  //       true
  //     );
  //   });
  // });

  // describe("image aspect ratio", () => {
  //   it("renders square image", () => {
  //     container = render(
  //       <SkeletonLoader imageAspectRatio={SkeletonLoaderImageRatios.Square} />
  //     );
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(
  //       container.find(".skeleton-loader-image--square").exists()
  //     ).toEqual(true);
  //   });

  //   it("renders portrait image", () => {
  //     container = render(
  //       <SkeletonLoader imageAspectRatio={SkeletonLoaderImageRatios.Portrait} />
  //     );
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(
  //       container.find(".skeleton-loader-image--portrait").exists()
  //     ).toEqual(true);
  //   });

  //   it("renders landscape image", () => {
  //     container = render(
  //       <SkeletonLoader
  //         imageAspectRatio={SkeletonLoaderImageRatios.Landscape}
  //       />
  //     );
  //     expect(container.find(".skeleton-loader").exists()).toEqual(true);
  //     expect(
  //       container.find(".skeleton-loader-image--landscape").exists()
  //     ).toEqual(true);
  //   });
  // });
});

import * as React from "react";
import { render } from "@testing-library/react";
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

  describe("UI elements", () => {
    it("renders default elements", () => {
      const utils = render(<SkeletonLoader />);
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-heading")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-content")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-button")
      ).not.toBeInTheDocument();
    });

    it("renders without image", () => {
      const utils = render(<SkeletonLoader showImage={false} />);
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image")
      ).not.toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-heading")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-content")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-button")
      ).not.toBeInTheDocument();
    });

    it("renders without heading", () => {
      const utils = render(<SkeletonLoader showHeading={false} />);
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-heading")
      ).not.toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-content")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-button")
      ).not.toBeInTheDocument();
    });

    it("renders without content", () => {
      const utils = render(<SkeletonLoader showContent={false} />);
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-heading")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-content")
      ).not.toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-button")
      ).not.toBeInTheDocument();
    });

    it("renders with button", () => {
      const utils = render(<SkeletonLoader showButton={true} />);
      container = utils.container;

      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-heading")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-content")
      ).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-button")
      ).toBeInTheDocument();
    });

    it("renders with border", () => {
      const utils = render(<SkeletonLoader border />);
      container = utils.container;
      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader--border")
      ).toBeInTheDocument();
    });
  });

  describe("image aspect ratio", () => {
    it("renders square image", () => {
      const utils = render(
        <SkeletonLoader imageAspectRatio={SkeletonLoaderImageRatios.Square} />
      );
      container = utils.container;
      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image--square")
      ).toBeInTheDocument();
    });

    it("renders portrait image", () => {
      const utils = render(
        <SkeletonLoader imageAspectRatio={SkeletonLoaderImageRatios.Portrait} />
      );
      container = utils.container;
      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image--portrait")
      ).toBeInTheDocument();
    });

    it("renders landscape image", () => {
      const utils = render(
        <SkeletonLoader
          imageAspectRatio={SkeletonLoaderImageRatios.Landscape}
        />
      );
      container = utils.container;
      expect(container.querySelector(".skeleton-loader")).toBeInTheDocument();
      expect(
        container.querySelector(".skeleton-loader-image--landscape")
      ).toBeInTheDocument();
    });
  });
});

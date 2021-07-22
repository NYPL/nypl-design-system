import { expect } from "chai";
import * as Enzyme from "enzyme";
import * as React from "react";

import SkeletonLoader from "./SkeletonLoader";
import {
  SkeletonLoaderImageRatios,
  SkeletonLoaderLayouts,
} from "./SkeletonLoaderTypes";

describe("SkeletonLoader", () => {
  let container;

  describe("layout", () => {
    it("renders default layout", () => {
      container = Enzyme.mount(<SkeletonLoader />);
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(
        container
          .find(".skeleton-loader")
          .hasClass(".skeleton-loader--vertical")
      ).to.equal(false);
      expect(
        container
          .find(".skeleton-loader")
          .hasClass(".skeleton-loader--portrait")
      ).to.equal(false);
    });

    it("renders vertical layout", () => {
      container = Enzyme.mount(
        <SkeletonLoader layout={SkeletonLoaderLayouts.Vertical} />
      );
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader--vertical").exists()).to.equal(
        true
      );
    });

    it("renders horizontal layout", () => {
      container = Enzyme.mount(
        <SkeletonLoader layout={SkeletonLoaderLayouts.Horizontal} />
      );
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader--horizontal").exists()).to.equal(
        true
      );
    });
  });

  describe("UI elements", () => {
    it("renders default elements", () => {
      container = Enzyme.mount(<SkeletonLoader />);
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-image").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-heading").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-content").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-button").exists()).to.equal(
        false
      );
    });

    it("renders without image", () => {
      container = Enzyme.mount(<SkeletonLoader showImage={false} />);
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-image").exists()).to.equal(false);
      expect(container.find(".skeleton-loader-heading").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-content").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-button").exists()).to.equal(
        false
      );
    });

    it("renders without heading", () => {
      container = Enzyme.mount(<SkeletonLoader showHeading={false} />);
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-image").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-heading").exists()).to.equal(
        false
      );
      expect(container.find(".skeleton-loader-content").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-button").exists()).to.equal(
        false
      );
    });

    it("renders without content", () => {
      container = Enzyme.mount(<SkeletonLoader showContent={false} />);
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-image").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-heading").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-content").exists()).to.equal(
        false
      );
      expect(container.find(".skeleton-loader-button").exists()).to.equal(
        false
      );
    });

    it("renders with button", () => {
      container = Enzyme.mount(<SkeletonLoader showButton={true} />);
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-image").exists()).to.equal(true);
      expect(container.find(".skeleton-loader-heading").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-content").exists()).to.equal(
        true
      );
      expect(container.find(".skeleton-loader-button").exists()).to.equal(true);
    });

    it("renders with border", () => {
      container = Enzyme.mount(<SkeletonLoader border />);
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(container.find(".skeleton-loader--border").exists()).to.equal(
        true
      );
    });
  });

  describe("image aspect ratio", () => {
    it("renders square image", () => {
      container = Enzyme.mount(
        <SkeletonLoader imageAspectRatio={SkeletonLoaderImageRatios.Square} />
      );
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(
        container.find(".skeleton-loader-image--square").exists()
      ).to.equal(true);
    });

    it("renders portrait image", () => {
      container = Enzyme.mount(
        <SkeletonLoader imageAspectRatio={SkeletonLoaderImageRatios.Portrait} />
      );
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(
        container.find(".skeleton-loader-image--portrait").exists()
      ).to.equal(true);
    });

    it("renders landscape image", () => {
      container = Enzyme.mount(
        <SkeletonLoader
          imageAspectRatio={SkeletonLoaderImageRatios.Landscape}
        />
      );
      expect(container.find(".skeleton-loader").exists()).to.equal(true);
      expect(
        container.find(".skeleton-loader-image--landscape").exists()
      ).to.equal(true);
    });
  });
});

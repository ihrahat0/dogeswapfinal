import { expect, it } from "vitest";
import TokenImage from "../../components/Image/TokenImage";
import { renderWithProvider, setupMockIntersectionObserver } from "../../testHelpers";

it("renders correctly", () => {
  setupMockIntersectionObserver();
  const { asFragment } = renderWithProvider(
    <TokenImage
      src="https://dogeswap.co/evm/images/tokens/0xbA2aE424d960c26247Dd6c32edC70B295c744C43.svg"
      height={48}
      width={48}
    />
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      max-height: 48px;
      max-width: 48px;
      position: relative;
      width: 100%;
    }

    .c0:after {
      content: "";
      display: block;
      padding-top: 100%;
    }

    .c2 {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    .c1 >img {
      border-radius: 50%;
    }

    .c1:before {
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.25);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 7;
    }

    <div
        class="c0 c1"
      >
        <div
          class="c2"
        />
      </div>
    </DocumentFragment>
  `);
});

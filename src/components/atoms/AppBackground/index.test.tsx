import { create, ReactTestRendererJSON } from "react-test-renderer";
import AppBackground from ".";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

describe("<AppBackground />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(<AppBackground />).toJSON();

    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(testTree?.children?.length).toBe(1);
  });
});

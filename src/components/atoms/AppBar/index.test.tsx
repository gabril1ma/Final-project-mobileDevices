import { create, ReactTestRendererJSON } from "react-test-renderer";
import AppBar from ".";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

describe("<AppBar />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(<AppBar />).toJSON();

    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });
});

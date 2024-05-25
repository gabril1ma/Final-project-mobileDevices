import { create, ReactTestRendererJSON } from "react-test-renderer";
import NewsList from "./NewsList";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

const MOCK_TEXT = "Jest test";
const mockFunction = () => jest.fn();

describe("<NewsList />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(<NewsList />).toJSON();

    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(testTree?.children?.length).toBe(3);
  });
});

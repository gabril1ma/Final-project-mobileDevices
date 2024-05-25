import { create, ReactTestRendererJSON } from "react-test-renderer";
import SearchInput from ".";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

const MOCK_TEXT = "Jest test";
const mockFunction = () => jest.fn();

describe("<SearchInput />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(<SearchInput />).toJSON();

    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(testTree?.children?.length).toBe(2);
  });
});

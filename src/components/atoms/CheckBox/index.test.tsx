import { create, ReactTestRendererJSON } from "react-test-renderer";
import CheckBox from "./CheckBox";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

const MOCK_TEXT = "Jest test";
const mockFunction = () => jest.fn();

describe("<CheckBox />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(
      <CheckBox
        isChecked={false}
        label={MOCK_TEXT}
        onValueChange={mockFunction}
      />
    ).toJSON();

    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(testTree?.children?.length).toBe(1);
  });
});

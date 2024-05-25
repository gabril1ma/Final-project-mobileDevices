import { create, ReactTestRendererJSON } from "react-test-renderer";
import ButtonCustom from ".";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

const MOCK_TEXT = "Jest test";
const mockFunction = () => jest.fn();

describe("<ButtonCustom />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(
      <ButtonCustom
        title={MOCK_TEXT}
        variant="primary"
        onPress={mockFunction}
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

  it("should be a button", () => {
    expect(testTree.props.accessibilityRole).toBe("button");
  });
});

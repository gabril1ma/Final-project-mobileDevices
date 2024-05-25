import { create, ReactTestRendererJSON } from "react-test-renderer";
import BroadcastersList from ".";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

const broadcasterMock = [
  {
    name: "CNN Brasil",
    selected: false,
    urlAPI: "",
  },
  {
    name: "Folha de São Paulo",
    selected: false,
    urlAPI: "",
  },
  {
    name: "Estado de Minas",
    selected: false,
    urlAPI: "",
  },
];

jest.mock("../../../hooks/useAppContext", () => ({
  __esModule: true,
  default: () => ({
    appState: {
      broadcasters: broadcasterMock,
    },
    setAppState: () => jest.fn(),
  }),
}));

describe("<BroadcastersList />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(<BroadcastersList />).toJSON();
    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(testTree?.children?.length).toBe(3);
  });
});

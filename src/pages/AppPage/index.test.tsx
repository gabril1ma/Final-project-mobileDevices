import { create, ReactTestRendererJSON } from "react-test-renderer";
import AppPage from ".";

export type TTreeRenderer = ReactTestRendererJSON | ReactTestRendererJSON[];

const broadcasterMock = [
  {
    name: "CNN Brasil",
    selected: true,
    urlAPI: "",
  },
  {
    name: "Folha de São Paulo",
    selected: true,
    urlAPI: "",
  },
  {
    name: "Estado de Minas",
    selected: true,
    urlAPI: "",
  },
];

jest.mock("../../hooks/useAppContext", () => ({
  __esModule: true,
  default: () => ({
    appState: {
      broadcasters: broadcasterMock,
    },
    setAppState: () => jest.fn(),
  }),
}));

describe("<AppPage />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(<AppPage />).toJSON();
    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(testTree?.children?.length).toBe(1);
  });
});

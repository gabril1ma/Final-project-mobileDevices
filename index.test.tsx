import { create, ReactTestRendererJSON } from "react-test-renderer";
import App from "./App";

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

jest.mock("./src/hooks/useAppContext", () => ({
  __esModule: true,
  default: () => ({
    appState: {
      broadcasters: broadcasterMock,
    },
    setAppState: () => jest.fn(),
  }),
}));

describe("<App />", () => {
  let tree: TTreeRenderer;
  let testTree: ReactTestRendererJSON;

  beforeEach(() => {
    tree = create(<App />).toJSON();
    testTree = tree[0] ?? tree;
  });

  it("should render component", () => {
    expect(testTree).toMatchSnapshot();
  });

  it("should have one children", () => {
    expect(testTree?.children?.length).toBe(3);
  });
});

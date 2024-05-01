export enum NavItem {
  HOME,
  QUERY,
  ANSWERS,
  DASHBOARD,
  SAVED_ANSWERS,
}

export const NavToPath = {
  [NavItem.HOME]: "/",
  [NavItem.QUERY]: "query",
  [NavItem.ANSWERS]: "answers",
  [NavItem.SAVED_ANSWERS]: "query/:id",
  [NavItem.DASHBOARD]: "dashboard",
};

export const pathToNav: { [key: string]: number } = {
  "/": NavItem.HOME,
  "/query": NavItem.QUERY,
  "/answers": NavItem.ANSWERS,
  "/dashboard": NavItem.DASHBOARD,
};

export const savedAnswerPathExpression = /^\/query\/.*$/;

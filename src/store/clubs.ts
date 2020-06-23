import { Action } from 'redux';

const INIT_CLUB = 'INIT_CLUB';

type InitClubAction = Action<typeof INIT_CLUB> & {
  clubs: Club[];
};

export const initClub = (clubs: Club[]): InitClubAction => ({
  type: INIT_CLUB,
  clubs,
});

type AlowwedActions = InitClubAction;

const clubReducer = (clubs: Club[] = [], action: AlowwedActions): Club[] => {
  switch (action.type) {
    case INIT_CLUB:
      return action.clubs;
    default:
      return clubs;
  }
};

export default clubReducer;

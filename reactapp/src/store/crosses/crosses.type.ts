export enum CROSSES_ACTION_TYPES {
  FETCH_CROSSES_START = "crosses/FETCH_CROSSES_START",
  FETCH_CROSSES_SUCCESS = "crosses/FETCH_CROSSES_SUCCESS",
  FETCH_CROSSES_FAILED = "crosses/FETCH_CROSSES_FAILED",
}

export type Cross = {
  match: {
    id: number;
    date: string;
  };
  player: {
    _id: number;
    name: string;
    display_name: string;
    position: string;
  };
  receiver: {
    _id: number;
    name: string;
    display_name: string;
  };
  start_coordinate_x: number;
  start_coordinate_y: number;
  end_coordinate_x: number;
  end_coordinate_y: number;
  result: string;
  types: string[];
  opponent_team: {
    _id: number;
    name: string;
    defence: string;
  };
};

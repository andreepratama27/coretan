import { proxy, useSnapshot } from "valtio";

type Status = "pending" | "completed";
type Filter = Status | "all";
type Todo = {
  id: number;
  description: string;
  status: Status;
};

export const store = proxy<{ filter: Filter; todos: Todo[] }>({
  filter: "all",
  todos: [],
});

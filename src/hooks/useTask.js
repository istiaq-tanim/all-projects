import { useContext } from "react";
import { TaskContext } from "../context";

export function useTask() {
      return useContext(TaskContext)
}
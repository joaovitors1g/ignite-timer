import { ICycle } from './reducer'

export enum ActionTypes {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export type ActionTypesProps =
  | { type: ActionTypes.CREATE_NEW_CYCLE; payload: { newCycle: ICycle } }
  | { type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED }
  | { type: ActionTypes.INTERRUPT_CURRENT_CYCLE }

export function createNewCycleAction(newCycle: ICycle): ActionTypesProps {
  return {
    type: ActionTypes.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptCurrentCycleAction(): ActionTypesProps {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction(): ActionTypesProps {
  return {
    type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

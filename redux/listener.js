import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toogleChangeAction, updateAction } from "./reducer";


const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    actionCreator: toogleChangeAction,
    effect: async (action, listenerApi) => {
        listenerApi.dispatch(updateAction(action.payload))
    }
})

export default listenerMiddleware
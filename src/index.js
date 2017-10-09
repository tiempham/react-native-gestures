import create from "./create"

import draggableDecorator from "./mixins/draggable"
import eventedDecorator from "./mixins/events"

import dragGesture from "./drag"
import pinchGesture from "./pinch"

import GestureView from "./GestureView"

import generalResponder from "./responders/general"
import oneFingerResponder from "./responders/oneFinger"
import twoFingerResponder from "./responders/twoFinger"

const Decorators = {
    draggable: draggableDecorator,
    evented: eventedDecorator,
}

const Gestures = {
    drag: dragGesture,
    pinch: pinchGesture,
}

const Responders = {
    general: generalResponder,
    oneFinger: oneFingerResponder,
    twoFinger: twoFingerResponder,
}

export default {
    create,
    Decorators,
    Gestures,
    GestureView,
    Responders,
}

export { create, Decorators, Gestures, GestureView, Responders }

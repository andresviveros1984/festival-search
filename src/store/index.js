import { create } from 'zustand'

const useStore = create((set) => ({

    eventType: '',
    changeSelectedItem: (eventType) => set((state) => ({ eventType: eventType })),

    events: [],
    setEvents: (events) => set((state) => ({ events: events }))
}))

export default useStore;



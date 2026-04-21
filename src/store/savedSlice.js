import { createSlice } from '@reduxjs/toolkit'

const load = () => {
  try {
    const data = localStorage.getItem('foodfacts-saved')
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const savedSlice = createSlice({
  name: 'saved',
  initialState: { items: load() },
  reducers: {
    addItem: (state, action) => {
      if (!state.items.find(i => i.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = savedSlice.actions
export default savedSlice.reducer
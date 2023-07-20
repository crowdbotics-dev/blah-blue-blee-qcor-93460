import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_tttt_list = createAsyncThunk(
  "tTTTS/api_v1_tttt_list",
  async payload => {
    const response = await apiService.api_v1_tttt_list(payload)
    return response.data
  }
)
export const api_v1_tttt_create = createAsyncThunk(
  "tTTTS/api_v1_tttt_create",
  async payload => {
    const response = await apiService.api_v1_tttt_create(payload)
    return response.data
  }
)
export const api_v1_tttt_retrieve = createAsyncThunk(
  "tTTTS/api_v1_tttt_retrieve",
  async payload => {
    const response = await apiService.api_v1_tttt_retrieve(payload)
    return response.data
  }
)
export const api_v1_tttt_update = createAsyncThunk(
  "tTTTS/api_v1_tttt_update",
  async payload => {
    const response = await apiService.api_v1_tttt_update(payload)
    return response.data
  }
)
export const api_v1_tttt_partial_update = createAsyncThunk(
  "tTTTS/api_v1_tttt_partial_update",
  async payload => {
    const response = await apiService.api_v1_tttt_partial_update(payload)
    return response.data
  }
)
export const api_v1_tttt_destroy = createAsyncThunk(
  "tTTTS/api_v1_tttt_destroy",
  async payload => {
    const response = await apiService.api_v1_tttt_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const tTTTSSlice = createSlice({
  name: "tTTTS",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_tttt_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tttt_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tttt_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tttt_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tttt_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tttt_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_tttt_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_tttt_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_tttt_list,
  api_v1_tttt_create,
  api_v1_tttt_retrieve,
  api_v1_tttt_update,
  api_v1_tttt_partial_update,
  api_v1_tttt_destroy,
  slice: tTTTSSlice
}

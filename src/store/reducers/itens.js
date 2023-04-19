import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const itensSlice = createSlice({
  name: 'itens',
  initialState: [],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state = state.map(item => {
        if(item.id === payload) item.favorito = !item.favorito;
        return item;
      })
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid() });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex(item => item.id === payload);
      state.splice(index, 1);
    },
    adicionarItens: (state, { payload }) => {
      return payload;
    }
  },
  // extraReducers: builder => {
  //   builder.addCase(
  //     buscarItens.pending,
  //     (state, { payload }) => {
  //       console.log('carregando')
  //     }
  //   )
  //   .addCase(
  //     buscarItens.rejected,
  //     (state, { payload }) => {
  //       console.log('busca de categorias rejeitada!')
  //     }
  //   )
  // } caso faça como o categorias
});

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem, adicionarItens } = itensSlice.actions;

export default itensSlice.reducer;
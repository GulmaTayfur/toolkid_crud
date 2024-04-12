/*
* Hem reducerlearı 
* Hem actionları
* farklı bir dosyada oluşturma yerine 
* createSlice methodu yardımıyla tek bir noktada tanımlayacağız
? slice oluşturma
* import {createSlice}
* gerekli parametreleri tanımlama
- - name: slice ismi > string
- - initialState: başlangıç state'i > object
- - reducers : aksiyonların görevlerini tanımladığımız fonksiyonlar
*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0, isDarkTheme: true },
  // state'in nasıl değişeceğine karar veren fonksiyonlar
  reducers: {
    increase: (state) => {
      state.count++;
    },
    decrease: (state) => {
      state.count--;
    },
    setCount: (state, action) => {
      state.count = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

// counter slice'ın oluşturduğu reducer'ı store'da kullanmak için export et
export default counterSlice.reducer;

// conterSlice'ın oluşturduğu aksiyon fonksiyonlarını bileşenlerde kullanmak için export et
export const { decrease, increase, setCount, toggleTheme } =
  counterSlice.actions;

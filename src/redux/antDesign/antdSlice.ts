import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { MenuTheme } from 'antd'
import { ButtonType } from 'antd/lib/button'
import { SizeType } from 'antd/lib/config-provider/SizeContext'

interface ItemsNavegationInterface {
  name: string,
  priority: number,
  icon: string,
  hidden: boolean
}

export interface AntDesignState {
  size: SizeType
  type: ButtonType
  fontSize: number
  theme: MenuTheme
  idiom: 'eng' | 'esp' | 'prt'
  primaryColor: string,
  visibleImage: boolean,
  visibleSrc: string,
  itemsNavegation: ItemsNavegationInterface[],
  titleItem: string,
  refreshItem: boolean
}

const initialState: AntDesignState = {
  size: 'middle' as SizeType,
  type: 'text' as ButtonType,
  fontSize: 20,
  idiom: 'esp',
  primaryColor: 'red',
  theme: 'light',
  visibleImage: false,
  visibleSrc: "",
  itemsNavegation: [],
  titleItem: "",
  refreshItem: false
}

export const antdDesignSlice = createSlice({
  name: 'andtDesign',
  initialState,
  reducers: {
    setSizeAntd: (state, action: PayloadAction<SizeType>) => {
      state.size = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
    setTheme: (state, action: PayloadAction<MenuTheme>) => {
      state.theme = action.payload;
    },
    setVisibleImage: (state, action: PayloadAction<boolean>) => {
      state.visibleImage = action.payload;
    },
    setVisibleSrc: (state, action: PayloadAction<string>) => {
      state.visibleSrc = action.payload;
    },
    setItemNavegation: (state, action: PayloadAction<ItemsNavegationInterface[]>) => {
      state.itemsNavegation = action.payload;
    },
    setTitleItem: (state, action: PayloadAction<string>) => {
      state.titleItem = action.payload;
    },
    setRefreshItem: (state, action: PayloadAction<boolean>) => {
      state.refreshItem = action.payload;
    },
  },
})

export const { setSizeAntd, setFontSize, setTheme, setVisibleImage, setVisibleSrc, setTitleItem, setRefreshItem } = antdDesignSlice.actions
export default antdDesignSlice.reducer
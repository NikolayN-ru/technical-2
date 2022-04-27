import { FETCH_LINK_NAVI_MENU } from "redux/actionTypes"

interface naviMenuStateItemProps {
	id: number;
	title: string;
	active: boolean;
	link: string;
	image: string;
	width: number;
	height: number;
}

interface naviMenuStateProps {
	menu: naviMenuStateItemProps[];
}

const initialState:naviMenuStateProps = {
	menu: [
		{id: 1, title: 'Мои объявления', active: true, link: 'myitems', image: '/list.svg', width:14, height:17},
		{id: 2, title: 'Мои сообщения', active: false, link: 'mymessage', image: '/message.svg', width:17, height:17},
		{id: 3, title: 'Закладки', active: false, link: 'mylikepage', image: '/like.svg', width:19, height:17},
		{id: 4, title: 'Настройки', active: false, link: 'mysettings', image: '/setting.svg', width:17, height:17},
		{id: 5, title: 'Обратиться в поддержку', active: false, link: 'question', image: '/question.svg', width:17, height:17}
	]
}

interface naviMenuProps {
	type: string,
	payload: any
  }

export const naviMenu = (state = initialState, { type, payload }:naviMenuProps) => {
	switch (type) {
		case FETCH_LINK_NAVI_MENU:
			return {
				menu: payload
			}
		default: 
			return state
	}
}
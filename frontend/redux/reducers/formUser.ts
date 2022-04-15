interface formUserItemProps {
	id: number;
	text: string;
	hint?: string;
	value?: string;
	btn?: boolean;
	titleBtn?: string;
	img?: string;
	placeholder?: string;
	inputElement?: boolean;
	select?: string[];
}

interface formUserProps {
	formdata: formUserItemProps[];
}

const initialState:formUserProps = {
	formdata: [
		{id:1, text:"Имя и фамилия", hint:"имя фамилия"},
		{id:2, text:"Телефоны", hint:"телефон", value:"+ 7 (123) -456- 78 -00", btn:true, titleBtn:"Добавить номер"},
		{id:3, text:"E-mail", hint:"Ivan@inbox.ru", value:"Ivan@inbox.ru"},
		{id:4, text:"Короткое имя", hint:"IvanPP", value:"IvanPP", placeholder:"Укажите короткий адрес вашей страницы, чтобы он стал более удобным и запоминающимся"},
		{id:5, text:"Город", select:["Москва", "СПБ", "Omsk"] },
		{id:6,  text:"Станция метро", select:["Sadovaya", "Luvniki", "Domodedovo"] },
		{id:7,  text:"Мое резюме", inputElement:false, titleBtn:"Добавить резюме", placeholder:"Данные для работодателей", btn:true},
		{id:8, text:"Тип профиля", select:["частное лицо", "ИП", "ЮР лица"]}
	]
}

export const formUser = (state = initialState, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
}
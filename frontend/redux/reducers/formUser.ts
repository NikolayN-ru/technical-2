interface formUserProps {
	text: string;
	hint: string;
	value: string;
	btn: boolean;
	titleBtn: string;
	img?: string;
	placeholder: string;
	inputElement: true;
	select: string[];
}

const initialState={

}

export const formUser = (state = initialState, { type, payload }) => {
	
}
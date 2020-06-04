
const validators = {

	maxSymbolsLenght(maxLenght) {
		return value => {
			if(value)
				return value.length > maxLenght && `Max lenght is ${maxLenght}`;
			else
				return undefined;
		}
	}
}

export {validators};

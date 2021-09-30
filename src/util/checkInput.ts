export default function checkInput(inputValue: string | number): number {
  if (typeof inputValue !== number) {
		return 'You need to provide a proper input number in seconds.';
	}

  if (inputValue.endsWith('ms')) {
    const miliseconds = parseInt(inputValue, 10);
    return Math.round(miliseconds / 100) * 10;
  }

  if (inputValue.endsWith('sec') || inputValue.endsWith('s')) {
    const seconds = parseInt(inputValue, 10);
    return seconds * 10;
  }

  if (inputValue.endsWith('min') || inputValue.endsWith('m')) {
    const minutes = parseInt(inputValue, 10);
    return minutes * 60 * 10;
  }

  if (inputValue.endsWith('hr') || inputValue.endsWith('h')) {
    const hours = parseInt(inputValue, 10);
    return hours * 60 * 60 * 10;
  }

  if (inputValue.endsWith('day') || inputValue.endsWith('d')) {
    const days = parseInt(inputValue, 10);
    return days * 24 * 60 * 60 * 10;
  }

  return parseInt(inputValue, 10) * 10;
}

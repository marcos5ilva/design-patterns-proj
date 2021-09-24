import DarkThemeFactory from './DarkThemeFactory';
import LightThemeFactory from './LightThemeFactory';
import View from './View';

test('Should create an light themed UI', function () {
	const view = new View(new LightThemeFactory());
	expect(view.label.color).toBe('black');
	expect(view.button.color).toBe('white');
	expect(view.button.backgroundColor).toBe('blue');
});

test('Should create an dark themed UI', function () {
	const view = new View(new DarkThemeFactory());
	expect(view.label.color).toBe('white');
	expect(view.button.color).toBe('white');
	expect(view.button.backgroundColor).toBe('black');
});

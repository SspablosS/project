install:
	npm ci

menu-game:
	node bin/menu-game.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
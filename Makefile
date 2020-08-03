install:
	npm install

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-numbers:
	node bin/brain-numbers.js

brain-pn:
	node bin/brain-pn.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

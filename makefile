CLANG_FORMAT=node_modules/clang-format/bin/linux_x64/clang-format --style=Google
CSS_VALIDATOR=node_modules/css-validator/bin/css-validator
ESLINT=node_modules/eslint/bin/eslint.js
HTML_VALIDATE=node_modules/html-validate/bin/html-validate.js
PRETTIER=node_modules/prettier/bin-prettier.js

pretty: node_modules
    # Format HTML and CSS files
	$(PRETTIER) --write src/main/webapp/*.{html,css} client/public/*.html client/src/*.css
    # Format Java files
	find src/main/java -iname *.java | xargs $(CLANG_FORMAT) -i
    # Format JavaScript files
	find src/main/webapp -iname *.js | xargs $(CLANG_FORMAT) -i
	find client/src -iname *.js | xargs $(CLANG_FORMAT) -i

validate: node_modules
    # Validate HTML files
	$(HTML_VALIDATE) src/main/webapp/*.html client/public/*.html
    # Validate JavaScript files
	$(ESLINT) src/main/webapp/*.js client/src/*.js

package:
	mvn package

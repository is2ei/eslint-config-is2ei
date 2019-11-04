/* eslint-disable no-magic-numbers, sort-keys */
module.exports = {
    "rules": {

        /**
         * Possible Errors
         */
        "for-direction": "error",                 // https://eslint.org/docs/rules/for-direction
        "getter-return": "error",                 // https://eslint.org/docs/rules/getter-return
        "no-async-promise-executor": "error",     // https://eslint.org/docs/rules/no-async-promise-executor
        "no-await-in-loop": "error",              // https://eslint.org/docs/rules/no-await-in-loop
        "no-compare-neg-zero": "error",           // https://eslint.org/docs/rules/no-compare-neg-zero
        "no-cond-assign": "error",                // https://eslint.org/docs/rules/no-cond-assign
        "no-console": "error",                    // https://eslint.org/docs/rules/no-console
        "no-constant-condition": "error",         // https://eslint.org/docs/rules/no-constant-condition
        "no-control-regex": "error",              // https://eslint.org/docs/rules/no-control-regex
        "no-debugger": "error",                   // https://eslint.org/docs/rules/no-debugger
        "no-dupe-args": "error",                  // https://eslint.org/docs/rules/no-dupe-args
        "no-dupe-keys": "error",                  // https://eslint.org/docs/rules/no-dupe-keys
        "no-duplicate-case": "error",             // https://eslint.org/docs/rules/no-duplicate-case
        "no-empty": "error",                      // https://eslint.org/docs/rules/no-empty
        "no-empty-character-class": "error",      // https://eslint.org/docs/rules/no-empty-character-class
        "no-ex-assign": "error",                  // https://eslint.org/docs/rules/no-ex-assign
        "no-extra-boolean-cast": "error",         // https://eslint.org/docs/rules/no-extra-boolean-cast
        "no-extra-parens": "error",               // https://eslint.org/docs/rules/no-extra-parens
        "no-extra-semi": "error",                 // https://eslint.org/docs/rules/no-extra-semi
        "no-func-assign": "error",                // https://eslint.org/docs/rules/no-func-assign
        "no-import-assign": "error",              // https://eslint.org/docs/rules/no-import-assign
        "no-inner-declarations": "error",         // https://eslint.org/docs/rules/no-inner-declarations
        "no-invalid-regexp": "error",             // https://eslint.org/docs/rules/no-invalid-regexp
        "no-irregular-whitespace": "error",       // https://eslint.org/docs/rules/no-irregular-whitespace
        "no-misleading-character-class": "error", // https://eslint.org/docs/rules/no-misleading-character-class
        "no-obj-calls": "error",                  // https://eslint.org/docs/rules/no-obj-calls
        "no-prototype-builtins": "error",         // https://eslint.org/docs/rules/no-prototype-builtins
        "no-regex-spaces": "error",               // https://eslint.org/docs/rules/no-regex-spaces
        "no-sparse-arrays": "error",              // https://eslint.org/docs/rules/no-sparse-arrays
        "no-template-curly-in-string": "error",   // https://eslint.org/docs/rules/no-template-curly-in-string
        "no-unexpected-multiline": "error",       // https://eslint.org/docs/rules/no-unexpected-multiline
        "no-unreachable": "error",                // https://eslint.org/docs/rules/no-unreachable
        "no-unsafe-finally": "error",             // https://eslint.org/docs/rules/no-unsafe-finally
        "no-unsafe-negation": "error",            // https://eslint.org/docs/rules/no-unsafe-negation
        "require-atomic-updates": "error",        // https://eslint.org/docs/rules/require-atomic-updates
        "use-isnan": "error",                     // https://eslint.org/docs/rules/use-isnan
        "valid-typeof": "error",                  // https://eslint.org/docs/rules/valid-typeof

        /**
         * Best Practices
         */
        "accessor-pairs": "error",                                 // https://eslint.org/docs/rules/accessor-pairs
        "array-callback-return": "error",                          // https://eslint.org/docs/rules/array-callback-return
        "block-scoped-var": "error",                               // https://eslint.org/docs/rules/block-scoped-var
        "class-methods-use-this": "error",                         // https://eslint.org/docs/rules/class-methods-use-this
        "complexity": "error",                                     // https://eslint.org/docs/rules/complexity
        "consistent-return": "off",                                // https://eslint.org/docs/rules/consistent-return
        "curly": "error",                                          // https://eslint.org/docs/rules/curly
        "default-case": "error",                                   // https://eslint.org/docs/rules/default-case
        "dot-location": ["error", "property"],                     // https://eslint.org/docs/rules/dot-location
        "dot-notation": "error",                                   // https://eslint.org/docs/rules/dot-notation
        "eqeqeq": "error",                                         // https://eslint.org/docs/rules/eqeqeq
        "guard-for-in": "error",                                   // https://eslint.org/docs/rules/guard-for-in
        "max-classes-per-file": "error",                           // https://eslint.org/docs/rules/max-classes-per-file
        "no-alert": "error",                                       // https://eslint.org/docs/rules/no-alert
        "no-caller": "error",                                      // https://eslint.org/docs/rules/no-caller
        "no-case-declarations": "error",                           // https://eslint.org/docs/rules/no-case-declarations
        "no-div-regex": "error",                                   // https://eslint.org/docs/rules/no-div-regex
        "no-else-return": "error",                                 // https://eslint.org/docs/rules/no-else-return
        "no-empty-function": "error",                              // https://eslint.org/docs/rules/no-empty-function
        "no-empty-pattern": "error",                               // https://eslint.org/docs/rules/no-empty-pattern
        "no-eq-null": "error",                                     // https://eslint.org/docs/rules/no-eq-null
        "no-eval": "error",                                        // https://eslint.org/docs/rules/no-eval
        "no-extend-native": "error",                               // https://eslint.org/docs/rules/no-extend-native
        "no-extra-bind": "error",                                  // https://eslint.org/docs/rules/no-extra-bind
        "no-extra-label": "error",                                 // https://eslint.org/docs/rules/no-extra-label
        "no-fallthrough": "error",                                 // https://eslint.org/docs/rules/no-fallthrough
        "no-floating-decimal": "error",                            // https://eslint.org/docs/rules/no-floating-decimal
        "no-global-assign": "error",                               // https://eslint.org/docs/rules/no-global-assign
        "no-implicit-coercion": "error",                           // https://eslint.org/docs/rules/no-implicit-coercion
        "no-implicit-globals": "error",                            // https://eslint.org/docs/rules/no-implicit-globals
        "no-implied-eval": "error",                                // https://eslint.org/docs/rules/no-implied-eval
        "no-invalid-this": "error",                                // https://eslint.org/docs/rules/no-invalid-this
        "no-iterator": "error",                                    // https://eslint.org/docs/rules/no-iterator
        "no-labels": "error",                                      // https://eslint.org/docs/rules/no-labels
        "no-lone-blocks": "error",                                 // https://eslint.org/docs/rules/no-lone-blocks
        "no-loop-func": "error",                                   // https://eslint.org/docs/rules/no-loop-func
        "no-magic-numbers": "error",                               // https://eslint.org/docs/rules/no-magic-numbers
        "no-multi-spaces": ["error", {"ignoreEOLComments": true}], // https://eslint.org/docs/rules/no-multi-spaces
        "no-multi-str": "error",                                   // https://eslint.org/docs/rules/no-multi-str
        "no-new": "error",                                         // https://eslint.org/docs/rules/no-new
        "no-new-func": "error",                                    // https://eslint.org/docs/rules/no-new-func
        "no-new-wrappers": "error",                                // https://eslint.org/docs/rules/no-new-wrappers
        "no-octal": "error",                                       // https://eslint.org/docs/rules/no-octal
        "no-octal-escape": "error",                                // https://eslint.org/docs/rules/no-octal-escape
        "no-param-reassign": "error",                              // https://eslint.org/docs/rules/no-param-reassign
        "no-proto": "error",                                       // https://eslint.org/docs/rules/no-proto
        "no-redeclare": "error",                                   // https://eslint.org/docs/rules/no-redeclare
        "no-restricted-properties": "error",                       // https://eslint.org/docs/rules/no-restricted-properties
        "no-return-assign": "error",                               // https://eslint.org/docs/rules/no-return-assign
        "no-return-await": "error",                                // https://eslint.org/docs/rules/no-return-await
        "no-script-url": "error",                                  // https://eslint.org/docs/rules/no-script-url
        "no-self-assign": "error",                                 // https://eslint.org/docs/rules/no-self-assign
        "no-self-compare": "error",                                // https://eslint.org/docs/rules/no-self-compare
        "no-sequences": "error",                                   // https://eslint.org/docs/rules/no-sequences
        "no-throw-literal": "error",                               // https://eslint.org/docs/rules/no-throw-literal
        "no-unmodified-loop-condition": "error",                   // https://eslint.org/docs/rules/no-unmodified-loop-condition
        "no-unused-expressions": "error",                          // https://eslint.org/docs/rules/no-unused-expressions
        "no-unused-labels": "error",                               // https://eslint.org/docs/rules/no-unused-labels
        "no-useless-call": "error",                                // https://eslint.org/docs/rules/no-useless-call
        "no-useless-catch": "error",                               // https://eslint.org/docs/rules/no-useless-catch
        "no-useless-concat": "error",                              // https://eslint.org/docs/rules/no-useless-concat
        "no-useless-escape": "error",                              // https://eslint.org/docs/rules/no-useless-escape
        "no-useless-return": "error",                              // https://eslint.org/docs/rules/no-useless-return
        "no-void": "error",                                        // https://eslint.org/docs/rules/no-void
        "no-warning-comments": "error",                            // https://eslint.org/docs/rules/no-warning-comments
        "no-with": "error",                                        // https://eslint.org/docs/rules/no-with
        "prefer-named-capture-group": "error",                     // https://eslint.org/docs/rules/prefer-named-capture-group
        "prefer-promise-reject-errors": "error",                   // https://eslint.org/docs/rules/prefer-promise-reject-errors
        "prefer-regex-literals": "error",                          // https://eslint.org/docs/rules/prefer-regex-literals
        "radix": "error",                                          // https://eslint.org/docs/rules/radix
        "require-await": "error",                                  // https://eslint.org/docs/rules/require-await
        "require-unicode-regexp": "error",                         // https://eslint.org/docs/rules/require-unicode-regexp
        "vars-on-top": "error",                                    // https://eslint.org/docs/rules/vars-on-top
        "wrap-iife": "error",                                      // https://eslint.org/docs/rules/wrap-iife
        "yoda": "error",                                           // https://eslint.org/docs/rules/yoda

        /**
         * Strict Mode
         */
        "strict": "error",

        /**
         * Variables
         */
        "init-declarations": "error",          // https://eslint.org/docs/rules/init-declarations
        "no-delete-var": "error",              // https://eslint.org/docs/rules/no-delete-var
        "no-label-var": "error",               // https://eslint.org/docs/rules/no-label-var
        "no-restricted-globals": "error",      // https://eslint.org/docs/rules/no-restricted-globals
        "no-shadow": "error",                  // https://eslint.org/docs/rules/no-shadow
        "no-shadow-restricted-names": "error", // https://eslint.org/docs/rules/no-shadow-restricted-names
        "no-undef": "error",                   // https://eslint.org/docs/rules/no-undef
        "no-undef-init": "error",              // https://eslint.org/docs/rules/no-undef-init
        "no-undefined": "error",               // https://eslint.org/docs/rules/no-undefined
        "no-unused-vars": "error",             // https://eslint.org/docs/rules/no-unused-vars
        "no-use-before-define": "error",       // https://eslint.org/docs/rules/no-use-before-define

        /**
         * Node.js and CommonJS
         */
        "callback-return": "error",       // https://eslint.org/docs/rules/callback-return
        "global-require": "error",        // https://eslint.org/docs/rules/global-require
        "handle-callback-err": "error",   // https://eslint.org/docs/rules/handle-callback-err
        "no-buffer-constructor": "error", // https://eslint.org/docs/rules/no-buffer-constructor
        "no-mixed-requires": "error",     // https://eslint.org/docs/rules/no-mixed-requires
        "no-new-require": "error",        // https://eslint.org/docs/rules/no-new-require
        "no-path-concat": "error",        // https://eslint.org/docs/rules/no-path-concat
        "no-process-env": "error",        // https://eslint.org/docs/rules/no-process-env
        "no-process-exit": "error",       // https://eslint.org/docs/rules/no-process-exit
        "no-restricted-modules": "error", // https://eslint.org/docs/rules/no-restricted-modules
        "no-sync": "error",               // https://eslint.org/docs/rules/no-sync

        /**
         * Stylistic Issues
         */
        "array-bracket-newline": ["error", "consistent"],            // https://eslint.org/docs/rules/array-bracket-newline
        "array-bracket-spacing": "error",                 // https://eslint.org/docs/rules/array-bracket-spacing
        "array-element-newline": ["error", "consistent"], // https://eslint.org/docs/rules/array-element-newline
        "block-spacing": "error",
        "brace-style": "error",
        "camelcase": "error",
        "capitalized-comments": "error",
        "comma-dangle": "error",
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "consistent-this": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": [
            "error",
            "as-needed",
            {"generators": "as-needed"}
        ],
        "func-style": "off",
        "function-paren-newline": "error",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "implicit-arrow-linebreak": "error",
        "indent": "error",
        "jsx-quotes": "error",
        "key-spacing": "error",
        "keyword-spacing": "error",
        "line-comment-position": "off",                   // https://eslint.org/docs/rules/line-comment-position
        "linebreak-style": "error",
        "lines-around-comment": "error",
        "lines-between-class-members": "error",
        "max-depth": "error",
        "max-len": [                                      // https://eslint.org/docs/rules/max-len
            "error", {
                "ignoreTrailingComments": true,
                "ignoreStrings": true
            }
        ],
        "max-lines": ["error", {"skipComments": true}],   // https://eslint.org/docs/rules/max-lines
        "max-lines-per-function": "error",
        "max-nested-callbacks": "error",
        "max-params": [
            "error",
            4
        ],
        "max-statements": "error",
        "multiline-comment-style": "error",
        "multiline-ternary": "error",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-array-constructor": "error",
        "no-bitwise": "error",
        "no-continue": "error",
        "no-inline-comments": "off",                      // https://eslint.org/docs/rules/no-inline-comments
        "no-lonely-if": "error",
        "no-mixed-operators": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-assign": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new-object": "error",
        "no-plusplus": "error",
        "no-restricted-syntax": "error",
        "no-tabs": "error",
        "no-ternary": "error",
        "no-trailing-spaces": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error",
        "object-curly-newline": "error",
        "object-curly-spacing": "error",                  // https://eslint.org/docs/rules/object-curly-spacing
        "object-property-newline": "error",               // https://eslint.org/docs/rules/object-property-newline
        "one-var": [
            "error",
            {
                "const": "consecutive"
            }
        ],
        "one-var-declaration-per-line": "error",
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": [
            "error",
            {"classes": "always"}
        ],
        "padding-line-between-statements": "error",
        "prefer-object-spread": "error",
        "quote-props": [
            "error",
            "consistent"
        ],
        "quotes": [
            "error",
            "double",
            {"allowTemplateLiterals": true,
                "avoidEscape": true}
        ],
        "semi": "error",
        "semi-spacing": "error",
        "semi-style": "error",
        "sort-keys": "error",
        "sort-vars": "error",
        "space-before-blocks": "error",
        "space-before-function-paren": "error",
        "space-in-parens": "error",
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "spaced-comment": "error",
        "switch-colon-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": "error",
        "wrap-regex": "error",

        /**
         * ECMAScript 6
         */
        "arrow-body-style": "error",        // https://eslint.org/docs/rules/arrow-body-style
        "arrow-parens": "error",            // https://eslint.org/docs/rules/arrow-parens
        "arrow-spacing": "error",           // https://eslint.org/docs/rules/arrow-spacing
        "constructor-super": "error",       // https://eslint.org/docs/rules/constructor-super
        "generator-star-spacing": "error",  // https://eslint.org/docs/rules/generator-star-spacing
        "no-class-assign": "error",         // https://eslint.org/docs/rules/no-class-assign
        "no-confusing-arrow": "error",      // https://eslint.org/docs/rules/no-confusing-arrow
        "no-const-assign": "error",         // https://eslint.org/docs/rules/no-const-assign
        "no-dupe-class-members": "error",   // https://eslint.org/docs/rules/no-dupe-class-members
        "no-duplicate-imports": "error",    // https://eslint.org/docs/rules/no-duplicate-imports
        "no-new-symbol": "error",           // https://eslint.org/docs/rules/no-new-symbol
        "no-restricted-imports": "error",   // https://eslint.org/docs/rules/no-restricted-imports
        "no-this-before-super": "error",    // https://eslint.org/docs/rules/no-this-before-super
        "no-useless-computed-key": "error", // https://eslint.org/docs/rules/no-useless-computed-key
        "no-useless-constructor": "error",  // https://eslint.org/docs/rules/no-useless-constructor
        "no-useless-rename": "error",       // https://eslint.org/docs/rules/no-useless-rename
        "no-var": "error",                  // https://eslint.org/docs/rules/no-var
        "object-shorthand": "error",        // https://eslint.org/docs/rules/object-shorthand
        "prefer-arrow-callback": "off",     // https://eslint.org/docs/rules/prefer-arrow-callback
        "prefer-const": "error",            // https://eslint.org/docs/rules/prefer-const
        "prefer-destructuring": "error",    // https://eslint.org/docs/rules/prefer-destructuring
        "prefer-numeric-literals": "error", // https://eslint.org/docs/rules/prefer-numeric-literals
        "prefer-rest-params": "error",      // https://eslint.org/docs/rules/prefer-rest-params
        "prefer-spread": "error",           // https://eslint.org/docs/rules/prefer-spread
        "prefer-template": "error",         // https://eslint.org/docs/rules/prefer-template
        "require-yield": "error",           // https://eslint.org/docs/rules/require-yield
        "rest-spread-spacing": "error",     // https://eslint.org/docs/rules/rest-spread-spacing
        "sort-imports": "error",            // https://eslint.org/docs/rules/sort-imports
        "symbol-description": "error",      // https://eslint.org/docs/rules/symbol-description
        "template-curly-spacing": "error",  // https://eslint.org/docs/rules/template-curly-spacing
        "yield-star-spacing": "error"       // https://eslint.org/docs/rules/yield-star-spacing
    }
};

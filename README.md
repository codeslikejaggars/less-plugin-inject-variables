# Example usage:

```javascript
    var injectVariables = require('less-plugin-inject-variables');

    less.render(filePath, {
      plugins : injectVariables({
        version : '1.0',
        env : 'production'
      })
    });
```

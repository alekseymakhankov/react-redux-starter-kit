const context = require.context('../', true, /__tests__\/.+\.js$/);
context.keys().forEach(context);

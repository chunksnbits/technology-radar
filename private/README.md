# Private configurations

In case you'll need to add build / app configurations you do not want to share on your public repository, you can place them in this folder.

This `private` folder is treated exactly as the `public` folder, i.e., all assets that are currently located in the public folder can also be placed here. You can access files loacted in `private` through importing using the `public` path. i.e.,:

```js
import asset from 'public/my-asset';
```

The import order will try to resolve the asset from the `private` folder first and fall back on the `public` folder, if that asset can not be found.
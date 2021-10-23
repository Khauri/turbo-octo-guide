## Tags API Storybook bug

To reproduce:
```
npm install
npm run storybook
```

Also note the workaround in `.storybook/main.js`.
Uncomment it and you should see that it works.

## Notes

I used a `.mdx` file here, which I don't think is fully supported yet, but the simple act of importing seems to be what's broken. The imported component _is not_ rendered in the story in any way in this repo.
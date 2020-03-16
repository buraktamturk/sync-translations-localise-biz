# sync-translations-localise-biz

This GitHub action downloads/updates the translations files from localised.biz API.

## Parameters

**apiKey:** The API key of the localised.biz project. (Required)

**destination:** Destination folder, where the language files are located. The action automatically created the folder, if it does not exists. (Required)

**format:** Output format without the dot inside. Defaults to JSON format. But you can specify any export format that localise.biz supports, such as arb, csv, html, ini, json, mo, php, po, pot, plist, bplist, properties, res, resx, sql, strings, stringsdict, tmx, ts, txt, xlf, xliff, xml and yml.  (Optional)

**failIfNotChanged:** A boolean that specifies whatever the action should fail if the language files are already up to date. Useful, if your action depends on a change of the language files. (Optional, defaults to false).

## Sample Usage

The following action will run every hour and update the translation files, if they are not out of date.

```yml
name: 'Update Translations'

on:
  schedule:
    - cron: '0 * * * *'

jobs:
  update-translations:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the project
        uses: actions/checkout@v1
      - name: Sync Translation Files
        uses: buraktamturk/sync-translations-localise-biz@master
        with:
          apiKey: 'YOUR-API-KEY-HERE'
          destination: src/i18n/messages
          format: json
          failIfNotChanged: true
      - name: Commit files
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add -A
          git commit -m "Update translations"
      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
```

## License

The MIT License (MIT)

Copyright (c) 2020 Burak Tamturk

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
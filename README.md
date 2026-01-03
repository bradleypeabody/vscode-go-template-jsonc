# JSONC Go Template Support for VSCode

[![GitHub license](https://img.shields.io/github/license/jinliming2/vscode-go-template.svg)](https://raw.githubusercontent.com/jinliming2/vscode-go-template/master/LICENSE)

Syntax highlighting for Go text/template syntax embedded in JSONC (JSON with Comments) files.

## Features

- **Full JSONC support** - Line comments (`//`), block comments (`/* */`), and trailing commas
- **Go template syntax highlighting** - Complete syntax highlighting within `{{ }}` delimiters
- **Semantic token support** - Precise syntax highlighting for complex Go template constructs
- **Editor features** - Auto-closing pairs, bracket matching, and intelligent formatting

## Supported Files

- `*.jsonc.gotmpl` - JSONC files with Go template syntax

## Example

```jsonc
{
  // Configuration with Go templates
  "projectName": "{{ .ProjectName }}",
  "version": "{{ .Version }}",
  "description": "{{ .Description | default "No description" }}",

  "features": [
    {{ range .Features }}
    "{{ . }}",
    {{ end }}
  ],

  "environment": {
    {{ if .IsDevelopment }}
    "mode": "development",
    {{ else }}
    "mode": "production",
    {{ end }}
    "debug": {{ .Debug }}
  },
}
```

## Installation

Install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=jinliming2.vscode-go-template) or build from source.

## Known Issues

- JSON language server validation is not available for `.jsonc.gotmpl` files (by design, to avoid errors on template syntax)

## Release Notes

See [CHANGELOG.md](./CHANGELOG.md) for version history.

## License

MIT

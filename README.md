# JSONC Go Template Support for VSCode

Syntax highlighting for Go text/template syntax embedded in JSONC (JSON with Comments) files.

> **Note:** This is a specialized fork of [vscode-go-template](https://github.com/jinliming2/vscode-go-template) by [jinliming2](https://github.com/jinliming2), modified to focus exclusively on `.jsonc.gotmpl` files. The original extension supported multiple file types and languages - this version was adapted to work well for the specific case of JSONC files with Go template syntax.

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

See [INSTALL.md](./INSTALL.md) for installation instructions.

**Quick install:** If you have the `.vsix` file, run:
```bash
code --install-extension vscode-jsonc-gotmpl-0.3.0.vsix
```

## Known Issues

- JSON language server validation is not available for `.jsonc.gotmpl` files (by design, to avoid errors on template syntax)

## Release Notes

See [CHANGELOG.md](./CHANGELOG.md) for version history.

## Credits

Based on [vscode-go-template](https://github.com/jinliming2/vscode-go-template) by jinliming2.

## License

MIT

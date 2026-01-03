# Change Log

## [Unreleased]

## [0.3.0] - 2026-01-03

### Changed

- **BREAKING:** Complete rewrite to focus exclusively on JSONC + Go template files
- Only supports `.jsonc.gotmpl` file extension
- Simplified extension with no dynamic configuration
- Extension now activates only when opening `.jsonc.gotmpl` files (lazy activation)

### Added

- Native JSONC language support with line comments (`//`), block comments (`/* */`), and trailing commas
- JSON bracket pairs and auto-closing support
- JSONC-specific editor features (comment toggling, bracket matching)

### Removed

- **BREAKING:** Multi-language injection support (HTML, CSS, JS, XML, etc.)
- **BREAKING:** Dynamic language/pattern configuration via settings
- **BREAKING:** Markdown fenced code block support
- **BREAKING:** Go source file injection support (double-quoted and raw strings)
- **BREAKING:** Support for `.go.txt`, `.go.tpl`, `.go.tmpl`, `.gtpl` file extensions
- **BREAKING:** `go-template.reload` command
- **BREAKING:** `go-template.languages` and `go-template.patterns` settings

## [0.2.1] - 2021-03-15

### Fixed

- Highlight code for go-template not working since the last release.

## [0.2.0] - 2021-03-09

### Added

- Markdown support: go-template

## [0.1.0] - 2021-01-18

### Added

- Refactor: use semantic API
- Support config for matching file extension / language id (implement using semantic API)

## [0.0.3] - 2020-12-09

### Fixed

- Syntax error when missing template-ending in go source.

## [0.0.2] - 2020-12-09

### Added

- Support syntax highlighting for Go Template embedded in literal string in Go source file.
- Support syntax highlighting for Go Template files: `*.gtpl`.

## [0.0.1] - 2020-09-09

### Added

- Support syntax highlighting for Go Template files: `*.go.txt`, `*.go.tpl`, `*.go.tmpl`.
- Support syntax highlighting for Go Template embedded in `HTML`, `JS`, and `CSS` files.
- Support syntax highlighting for Go Template embedded in unknown extension files which begin with `{{ /* Go Template */ }}`.

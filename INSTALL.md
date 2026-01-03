# Installation Instructions

## Install the JSONC Go Template Extension

This extension provides syntax highlighting for `.jsonc.gotmpl` files (JSONC with Go template syntax).

### Method 1: Install from .vsix file (Recommended)

1. Download the `vscode-jsonc-gotmpl-0.3.0.vsix` file
2. Open VSCode
3. Open the Extensions view (<kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> on Mac, <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>X</kbd> on Windows/Linux)
4. Click the "..." menu (three dots) at the top of the Extensions view
5. Select "Install from VSIX..."
6. Browse to and select the `vscode-jsonc-gotmpl-0.3.0.vsix` file
7. Restart VSCode if prompted

### Method 2: Command Line Installation

```bash
code --install-extension vscode-jsonc-gotmpl-0.3.0.vsix
```

### Method 3: Build from Source

If you don't have the `.vsix` file, you can build it yourself:

```bash
# Clone or download the repository
git clone <repository-url>
cd vscode-go-template-jsonc

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Package the extension (requires @vscode/vsce)
npm install -g @vscode/vsce
vsce package --no-yarn

# Install the generated .vsix file
code --install-extension vscode-jsonc-gotmpl-0.3.0.vsix
```

### Verification

1. Create or open a file with the `.jsonc.gotmpl` extension
2. The language mode (bottom-right corner) should show "JSONC Go Template"
3. You should see syntax highlighting for:
   - JSONC comments (`//` and `/* */`)
   - JSON syntax (keys, values, brackets)
   - Go template delimiters (`{{ }}`)
   - Go template keywords (`if`, `range`, `end`, etc.)

### Example File

Create a test file `config.jsonc.gotmpl`:

```jsonc
{
  // Configuration with Go templates
  "name": "{{ .ProjectName }}",
  "version": "{{ .Version }}",
  "features": [
    {{ range .Features }}
    "{{ . }}",
    {{ end }}
  ],
}
```

### Troubleshooting

- **Extension not working?** Make sure the file has the `.jsonc.gotmpl` extension
- **Wrong language detected?** Click the language mode indicator in the bottom-right and select "JSONC Go Template"
- **Need to uninstall?** Extensions view → Search for "JSONC Go Template" → Click the gear icon → Uninstall

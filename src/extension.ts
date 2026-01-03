import * as vscode from 'vscode';
import GoTemplateSemanticTokensProvider, { goTemplateLegend } from './GoTemplateSemanticTokensProvider';

export const activate = (context: vscode.ExtensionContext): void => {
  context.subscriptions.push(
    vscode.languages.registerDocumentSemanticTokensProvider(
      { language: 'jsonc-gotmpl' },
      new GoTemplateSemanticTokensProvider(),
      goTemplateLegend,
    ),
  );
};

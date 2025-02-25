import { BlockViewExtension, FlavourExtension } from '@blocksuite/block-std';
import type { ExtensionType } from '@blocksuite/store';
import { literal } from 'lit/static-html.js';

import { EmbedGithubBlockAdapterExtensions } from './adapters/extension.js';
import { EmbedGithubBlockService } from './embed-github-service.js';

export const EmbedGithubBlockSpec: ExtensionType[] = [
  FlavourExtension('affine:embed-github'),
  EmbedGithubBlockService,
  BlockViewExtension('affine:embed-github', model => {
    return model.parent?.flavour === 'affine:surface'
      ? literal`affine-embed-edgeless-github-block`
      : literal`affine-embed-github-block`;
  }),
  EmbedGithubBlockAdapterExtensions,
].flat();
